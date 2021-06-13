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

// update function
const update = (data) => {
    // update color scale domain
    color.domain(data.map(item => item.name));

    // join enhanced (pie) data to path elements
    const paths = graph.selectAll('path')
        .data(pie(data));

    // handle the exit selection
    paths.exit().remove();

    // handle the current DOM path updates
    paths.attr('d', arcPath);

    paths.enter()
        .append('path')
        .attr('class', 'arc')
        .attr('stroke', '#fff')
        .attr('stroke-width', 3)
        .attr('fill', item => color(item.data.name))
        .transition().duration(750)
            .attrTween('d', arcTweenEnter);
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

    return function(ticker){
        data.startAngle = interpolation(ticker);
        return arcPath(data);
    };
};