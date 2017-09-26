# D3 POC

A proof of concept project that uses D3.js and C3.js charts.

## Libraries

* **D3.js:** D3.js is a JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS.
* **C3.js:** A D3-based reusable, comfortable, customizable and controllable chart library.

## Branches

* **master:** Uses C3.js library for modeling a bar chart and three donut charts.
* **line:** Uses D3.js library for modeling a line chart.
* **bar:** Uses D3.js library for modeling a bar chart.
* **pie:** Uses D3.js library for modeling a pie chart.
* **c3-bar:** Uses C3.js library for modeling a bar chart.
* **c3-donut:** Uses C3.js library for modeling donut charts.

## D3.js library usage
* **Library Reference:** [Site](http://c3js.org/)
* **React Library Name:** "react-c3js"
* **React Library Reference:** [GitHub repo](https://github.com/bcbcarl/react-c3js)
###D3.js library example
Here is an example for bar chart.
This code uses D3.js with React.js
```
import React from 'react';
import ReactDOM from 'react-dom';
import { BarChart } from 'react-d3-basic';

const data = [
    {"week": "May 28", "suggestions": 349}
];

const width = 1000,
    height = 500,
    chartSeries = [
        {
            field: 'suggestions'
        }
    ],
    x = function (d) {
        return d.week;
    },
    xScale = 'ordinal',
    y = function (d) {
        return +d;
    },
    yScale = 'linear';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<BarChart
    data= {data}
    width= {width}
    height= {height}
    chartSeries = {chartSeries}
    x= {x}
    xScale= {xScale}
    y= {y}
    yScale= {yScale}
    />, document.getElementById('chart'));
```
Replaces this code for D3.js normal usage generating a similar chart:
```
var svg = d3.select("svg"),
    margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    y = d3.scaleLinear().rangeRound([height, 0]);

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
x.domain(data.map(function(d) { return d.letter; }));
y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(10, "%"))
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Frequency");

g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.letter); })
      .attr("y", function(d) { return y(d.frequency); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.frequency); });
```

## C3.js library usage
* **Library Reference:** [Site](https://d3js.org/)
* **React Library Name:** "react-d3-*"
* **React Library Reference:** [Site](http://www.reactd3.org/)

###C3.js library example
Here is an example for bar chart.
This code uses C3.js with React.js
```
import React from 'react';
import ReactDOM from 'react-dom';
import C3Chart from 'react-c3js';

const data = {
    x : 'x',
    columns: [
        ['x', 'May 28', 'Jun 4', 'Jun 11', 'Jun 18', 'Jun 25', 'Jul 2', 'Jul 9', 'Jul 16', 'Jul 23', 'Jul 30', 'Aug 7', 'Aug 14'],
        ['pv', 349, 667, 611, 292, 403, 355, 673, 616, 298, 412, 351, 302],
    ],
    type: 'bar'
};

const bar = {
    width: {
        ratio: 0.7
    }
};

ReactDOM.render(<C3Chart data={data} bar={bar} />, document.getElementById('chart'));
```
Replaces this code for C3.js normal usage generating a similar chart:
```
var chart = c3.generate({
    data: {
        x : 'x',
        columns: [
            ['x', 'May 28', 'Jun 4', 'Jun 11', 'Jun 18', 'Jun 25', 'Jul 2', 'Jul 9', 'Jul 16', 'Jul 23', 'Jul 30', 'Aug 7', 'Aug 14'],
            ['pv', 349, 667, 611, 292, 403, 355, 673, 616, 298, 412, 351, 302]
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.7
        }
    }
});
```
