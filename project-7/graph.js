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

const angles = pie([
    {name: '1', cost: 500},
    {name: '2', cost: 300},
    {name: '3', cost: 200}
]);

console.log(angles);