import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

const data = {
    x : 'x',
    columns: [
        ['x', 'May 28', 'Jun 4', 'Jun 11', 'Jun 18', 'Jun 25', 'Jul 2', 'Jul 9', 'Jul 16', 'Jul 23', 'Jul 30', 'Aug 7', 'Aug 14'],
        ['pv', 349, 667, 611, 292, 403, 355, 673, 616, 298, 412, 351, 302],
    ],
    type: 'bar',
    order: null
};
const color = {pattern: ['#1D9283']};

const bar = {
    width: {
        ratio: 0.7
    }
};

const axis = {
    x: {
        type: 'category',
        height: 130
    },
    y: {
        show: false
    }
};

const legend = {
    show: false
};

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<C3Chart data={data} axis={axis} color={color} bar={bar} legend={legend} />, document.getElementById('chart'));


