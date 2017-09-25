import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import C3Chart from 'react-c3js';
import 'c3/c3.css';


const data0 = {
    columns: [
        ['Weekly', 10],
        ['2x Weekly', 30],
        ['Daily', 40],
        ['2x Daily', 10],
        ['> Weekly', 10]
    ],
    type: 'donut',
    order: null
};
const color0 = {pattern: ['#1D9283', '#39B4A0', '#8C88FC', '#ED6774', '#C93F4D']};
const donut0 = {
    title: "+4% from previous week",
    label: {
        format: function (value) { return null; }
    }
};

const data1 = {
    columns: [
        ['Accepted', 40],
        ['Accepted, incomplete', 30],
        ['Dismissed', 10],
        ['No action', 10],
        ['No sync', 10]
    ],
    type: 'donut',
    order: null
};
const color1 = {pattern:
    ['#39B4A0', '#ED6774', '#8C88FC', '#6259F4', '#1D9283']};
const donut1 = {
    title: "+1% from previous week",
    label: {
        format: function (value) { return null; }
    }
};

const data2 = {
    columns: [
        ['None selected', 30],
        ['All content required', 10],
        ['Channel not appropiate', 20],
        ['Default', 20],
        ['Limited access', 10],
        ['Not priority customer', 10]
    ],
    type: 'donut',
    order: null
};
const color2 = {pattern: ['#1D9283', '#39B4A0', '#8C88FC', '#ED6774', '#C93F4D', '#84dddc']};
const donut2 = {
    title: "-2% from previous week",
    label: {
        format: function (value) { return null; }
    }
};


ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<C3Chart data={data0} color={color0} donut={donut0} />, document.getElementById('chart-0'));
ReactDOM.render(<C3Chart data={data1} color={color1} donut={donut1} />, document.getElementById('chart-1'));
ReactDOM.render(<C3Chart data={data2} color={color2} donut={donut2} />, document.getElementById('chart-2'));


