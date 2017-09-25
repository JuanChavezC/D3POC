import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import C3Chart from 'c3-react';
import 'c3/c3.css';

let data = [
    {
        key: "Suggestions by week",
        values: [
            {label: "May 28", value: 349},
            {label: "Jun 4", value: 667},
            {label: "Jun 11", value: 611},
            {label: "Jun 18", value: 292},
            {label: "Jun 25", value: 403},
            {label: "Jul 2", value: 355},
            {label: "Jul 9", value: 673},
            {label: "Jul 16", value: 616},
            {label: "Jul 23", value: 298},
            {label: "Jul 30", value: 412},
            {label: "Aug 7", value: 351},
            {label: "Aug 14", value: 302}
        ]
    }
];

let type = "bar";

let options = {
    axisLabel: {
        x: {
            show: false
        },
        y: {
            show: false
        }
    },
    legend: false
};

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<C3Chart data={data} type={type} options={options}/>, document.getElementById('chart'));


