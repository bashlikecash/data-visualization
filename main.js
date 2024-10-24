import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

window.onload = setup

// wait for the html elements to be selectable
function setup () {

    const div = d3.select('#main-vis') // matches the tag in the html file
    
    const dataViz = [
        {w: '100', h: '100', x: '100', y: '100', c: 'DarkTurquoise'},
        {w: '75', h: '75', x: '75', y: '75', c: 'Gold'},
        {w: '50', h: '50', x: '50', y: '50', c: 'Salmon'}
    ]

    const svg = d3.create('svg')
        .attr('width', 400)
        .attr('height', 400)

    svg.selectAll('rect')      // sets shape to rectangles
        .data(dataViz)             
        .join('rect')            
            .attr("x", row => row.x) 
            .attr("y", row => row.y)  
            .attr("width", row => row.w) 
            .attr("height", row => row.h)
            .attr("fill", row => row.c);

    
    div.append(svg)
}
