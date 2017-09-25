import * as d3 from 'd3';
import React from 'react';
import ReactDOM from 'react-dom';
import { BarChart } from 'react-d3-basic';
import Header from './Header';

const data = [
    {"week": "May 28", "suggestions": 349},
    {"week": "Jun 4", "suggestions": 667},
    {"week": "Jun 11", "suggestions": 611},
    {"week": "Jun 18", "suggestions": 292},
    {"week": "Jun 25", "suggestions": 403},
    {"week": "Jul 2", "suggestions": 355},
    {"week": "Jul 9", "suggestions": 673},
    {"week": "Jul 16", "suggestions": 616},
    {"week": "Jul 23", "suggestions": 298},
    {"week": "Jul 30", "suggestions": 412},
    {"week": "Aug 7", "suggestions": 351},
    {"week": "Aug 14", "suggestions": 302}
];

const width = 1000,
    height = 500,
    margins = {top: 50, right: 50, bottom: 50, left: 50},
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
    showLegend={false}
    data= {data}
    width= {width}
    height= {height}
    margins= {margins}
    chartSeries = {chartSeries}
    x= {x}
    xScale= {xScale}
    y= {y}
    yScale= {yScale}
    />
    , document.getElementById('chart'));

