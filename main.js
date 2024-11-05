import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import * as cdc from 'https://cdn.jsdelivr.net/gh/stdlib-js/datasets-cdc-nchs-us-births-1994-2003@esm/index.mjs';

//const data = datasets('CDC_NCHS_US_BIRTHS_1994_2003')

// wait for the html elements to be selectable
window.onload = setup

function setup () {
    console.log(cdc)

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
            .attr("fill", row => row.c)
    
    // what is going on...
    console.log(svg.node())

    // append child is a javascript method not d3.
    // this is just one way to get the update
    div.node().appendChild(svg.node())

    const cdcdiv = document.querySelector('#cdc-vis')

    const cdc_data = cdc.default()

    const svg2 = d3.create('svg')
        .attr('width', 800)
        .attr('height', 600)

    //const cdcyears = cdc_data.filter( d => d.year == 1994)

    const cdcyears = cdc_data.reduce( (buckets, row) => {
        var val = row['year'] // check for the key 'year'
        if(! val in buckets){ 
          buckets[val] = [] // if it doesnt have 1994, start a new array
        }
        buckets[val].push(row) // append this row to the new array
        return buckets
        }, {})
    
    return cdcyears
    
}
