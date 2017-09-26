# D3 POC

## Branches

* **line:** Uses D3.js library for modeling a line chart.
* **bar:** Uses D3.js library for modeling a bar chart.
* **pie:** Uses D3.js library for modeling a pie chart.
* **c3-bar:** Uses C3.js library for modeling a bar chart.
* **c3-donut:** Uses C3.js library for modeling donut charts.
* **master:** Uses C3.js library for modeling a bar chart and three donut charts.

## D3.js library usage
* **Library Reference:** [Site](http://c3js.org/)
* **React Library Name:** "react-c3js"
* **React Library Reference:** [GitHub repo](https://github.com/bcbcarl/react-c3js)
###D3.js library example


## C3.js library usage
* **Library Reference:** [Site](http://c3js.org/)
* **React Library Name:** "react-c3js"
* **React Library Reference:** [GitHub repo](https://github.com/bcbcarl/react-c3js)

###C3.js library example
Here is an example for bar chart.
This code uses C3.js 
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
Replaces this code for C3.js normal usage:
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