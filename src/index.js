import * as d3 from 'd3';
import React from 'react';
import ReactDOM from 'react-dom';
import { LineChart } from 'react-d3-basic';
import Header from './Header';

const data = [
    {"value": 75, "index": 0},
    {"value": 50, "index": 1},
    {"value": 0, "index": 2},
    {"value": 100, "index": 3}
];

const chartSeries = [
        {
            field: 'value',
            name: 'Value',
            color: '#000000'
        }
    ],
    x = d => d.index,
    xDomain = d3.extent(data, x),
    xLabel = "Index",
    y = d => d,
    yDomain = d3.extent(data, d => d.value),
    yLabel = "Value",
    yLabelPosition = 'right';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<LineChart data= {data}
                           chartSeries= {chartSeries}
                           x= {x}
                           xDomain= {xDomain}
                           xLabel = {xLabel}
                           y= {y}
                           yDomain= {yDomain}
                           yLabel = {yLabel}
                           yLabelPosition = {yLabelPosition}/>, document.getElementById('chart'));

