import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

window.onload = setup

// wait for the html elements to be selectable
function setup () {

<<<<<<< HEAD
=======
    const div = d3.select('#main-vis') // matches the tag in the html file
    
>>>>>>> 0d82243ed6747901e33a8f052958fe14f3930b7b
    const dataViz = [
        {w: '100', h: '100', x: '100', y: '100', c: 'DarkTurquoise'},
        {w: '75', h: '75', x: '75', y: '75', c: 'Gold'},
        {w: '50', h: '50', x: '50', y: '50', c: 'Salmon'}
    ]

<<<<<<< HEAD
    const div = d3.select('#main-vis') // matches the tag in the html file

=======
>>>>>>> 0d82243ed6747901e33a8f052958fe14f3930b7b
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

<<<<<<< HEAD
    
    div.append(svg)
}
=======
    // what is going on...
    console.log(svg.node())

    // append child is a javascript method not d3.
    // this is just one way to get the update
    div.node().appendChild(svg.node())
}
>>>>>>> 0d82243ed6747901e33a8f052958fe14f3930b7b
