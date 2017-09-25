import * as d3 from 'd3';
import React from 'react';
import ReactDOM from 'react-dom';
import { PieChart } from 'react-d3-basic';
import Header from './Header';

const data = [
    {"age": "2xd", "population": 10},
    {"age": "d", "population": 40},
    {"age": "2xw", "population": 30},
    {"age": "w", "population": 10},
    {"age": "mw", "population": 10}
];


const width = 500,
    height = 500,
    radius = 200,
    showLegend = true,
    value = function (d) {
        return +d.population;
    },
    name = function (d) {
        return d.age;
    },
    chartSeries = [
        {
            "field": "2xd",
            "name": "2x Daily"
        },
        {
            "field": "d",
            "name": "Daily"
        },
        {
            "field": "2xw",
            "name": "2x Weekly"
        },
        {
            "field": "w",
            "name": "Weekly"
        },
        {
            "field": "mw",
            "name": "> Weekly"
        }
    ];


ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<PieChart
    data= {data}
    width= {width}
    height= {height}
    radius= {radius}
    chartSeries= {chartSeries}
    value = {value}
    name = {name}
    pieSort = {d3.descending}
/>, document.getElementById('chart'));

