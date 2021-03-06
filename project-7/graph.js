const dimensions = { height: 300, width: 300, radius: 150 };
const center = { x: (dimensions.width / 2 + 5), y: (dimensions.height / 2 + 5) };

const svg = d3.select('.canvas')
    .append('svg')
    .attr('width', dimensions.width + 150)
    .attr('height', dimensions.height + 150);

const graph = svg.append('g')
    .attr('transform', `translate(${center.x}, ${center.y})`);

const pie = d3.pie()
    .sort(null)
    .value(data => data.cost);
    // the value we are evaluating to create the pie angles

const arcPath = d3.arc()
    .outerRadius(dimensions.radius)
    .innerRadius(dimensions.radius / 2);

const color = d3.scaleOrdinal(d3['schemeSet3']);

// legend setup
const legendGroup = svg.append('g')
    .attr('transform', `translate(${dimensions.width + 40}, 10)`);

const legend = d3.legendColor()
    .shape('circle')
    .shapePadding(10)
    .scale(color);

const tip = d3.select('body')
    .append('div')
    .attr('class', 'tip')
    .style('padding', '8px')
    .style('position', 'absolute')
    .style('left', 0)
    .style('top', 0)
    .style('visibility', 'hidden');

// update function
const update = (data) => {
    // update color scale domain
    color.domain(data.map(item => item.name));

    // update and call legend
    legendGroup.call(legend)
    legendGroup.selectAll('text').attr('fill', 'white');

    // join enhanced (pie) data to path elements
    const paths = graph.selectAll('path')
        .data(pie(data));

    // handle the exit selection
    paths.exit()
        .transition().duration(750)
        .attrTween('d', arcTweenExit)
        .remove();

    // handle the current DOM path updates
    paths.attr('d', arcPath)
        .transition().duration(750)
        .attrTween('d', arcTweenUpdate);

    paths.enter()
        .append('path')
        .attr('class', 'arc')
        .attr('stroke', '#fff')
        .attr('stroke-width', 3)
        .attr('fill', item => color(item.data.name))
        .each(function(data){ this._current = data })
        .transition().duration(750)
            .attrTween('d', arcTweenEnter);
    
    // add events
    graph.selectAll('path')
        .on('mouseover', (event, datum) => {
            let content = `<div class="name">${datum.data.name}</div>`;
            content += `<div class="cost">${datum.data.cost} PLN</div>`;
            content += `<div class="delete">Click slice to delete</div>`;
            tip.html(content).style('visibility', 'visible');
            handleMouseOver(event, datum);
        })
        .on('mouseout', (event, datum) => {
            tip.style('visibility', 'hidden');
            handleMouseOut(event, datum);
        })
        .on('mousemove', (event, datum) => {
            // calculate the mouse's position relative the whole page by using event.pageX and event.pageY
            tip.style('transform', `translate(${event.pageX}px, ${event.pageY}px`);
        })
        .on('click', handleClick);
};

// data array and firestore
let data = [];

db.collection('expenses').onSnapshot(response => {
    response.docChanges().forEach(change => {
        const doc = {...change.doc.data(), id: change.doc.id};
        switch (change.type) {
            case 'added':
                data.push(doc);
                break;
            case 'modified':
                const index = data.findIndex(item => item.id === doc.id);
                data[index] = doc;
                break;
            case 'removed':
                data = data.filter(item => item.id !== doc.id);
                break;
            default:
                break;
        };
    });
    update(data);
});

const arcTweenEnter = (data) => {
    let interpolation = d3.interpolate(data.endAngle, data.startAngle);

    return function(timeTicker){
        data.startAngle = interpolation(timeTicker);
        return arcPath(data);
    };
};

const arcTweenExit = (data) => {
    let interpolation = d3.interpolate(data.startAngle, data.endAngle);

    return function(timeTicker){
        data.startAngle = interpolation(timeTicker);
        return arcPath(data);
    };
};

// use function keyword to allow use of 'this'
function arcTweenUpdate(data){
    // interpolate between the two objects
    let interpolation = d3.interpolate(this._current, data);
    // update the current prop with new updated data
    this._current = data;

    return function(timeTicker){
        return arcPath(interpolation(timeTicker));
    };
};

// event handlers
const handleMouseOver = (event, datum) => {
    d3.select(event.currentTarget)
        .transition('changeSliceFill').duration(300)
            .attr('fill', '#fff');
};

const handleMouseOut = (event, datum) => {
    d3.select(event.currentTarget)
        .transition('changeSliceFill').duration(300)
            .attr('fill', color(datum.data.name));
};

const handleClick = (event, datum) => {
    const id = datum.data.id;
    db.collection('expenses').doc(id).delete();
};