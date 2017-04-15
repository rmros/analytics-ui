import {filterColors, chartFillColors} from '../util'
export const tableData = [
    {
        distinctId: 1,
        event: "Visited : Home Page",
        browser: 'Chrome',
        city: "New Delhi",
        country: "India",
        time: "13 min. ago",
        expand: [
            {
                fieldA: 'browser : Chrome',
                fieldB: 'OS : MAC OS X',
                fieldC: Math.random() * 100,
                fieldD: '123eedd'
            }, {
                fieldA: 'test1',
                fieldB: 99,
                fieldC: Math.random() * 100,
                fieldD: '123eedd'
            }
        ]
    }, {
        distinctId: 2,
        event: "Visited : Sign Up Page",
        browser: 'Firefox',
        city: "New Delhi",
        country: "India",
        time: "11 min. ago",
        expand: [
            {
                fieldA: 'test1',
                fieldB: 99,
                fieldC: Math.random() * 100,
                fieldD: '123eedd'
            }, {
                fieldA: 'test1',
                fieldB: 99,
                fieldC: Math.random() * 100,
                fieldD: '123eedd'
            }
        ]
    }, {
        distinctId: 3,
        event: "Visited : Pricing Page",
        browser: 'Safari',
        city: "New Delhi",
        country: "India",
        time: "13 min. ago",
        expand: [
            {
                fieldA: 'test1',
                fieldB: 99,
                fieldC: Math.random() * 100,
                fieldD: '123eedd'
            }, {
                fieldA: 'test1',
                fieldB: 99,
                fieldC: Math.random() * 100,
                fieldD: '123eedd'
            }
        ]
    }, {
        distinctId: 4,
        event: "Visited : Consulting Page",
        browser: 'Edge',
        city: "New Delhi",
        country: "India",
        time: "1 day ago",
        expand: [
            {
                fieldA: 'test1',
                fieldB: 99,
                fieldC: Math.random() * 100,
                fieldD: '123eedd'
            }, {
                fieldA: 'test1',
                fieldB: 99,
                fieldC: Math.random() * 100,
                fieldD: '123eedd'
            }
        ]
    }, {
        distinctId: 5,
        event: "Visited : Compare Page",
        browser: 'IE',
        city: "New Delhi",
        country: "India",
        time: "3 sec. ago",
        expand: [
            {
                fieldA: 'test1',
                fieldB: 99,
                fieldC: Math.random() * 100,
                fieldD: '123eedd'
            }, {
                fieldA: 'test1',
                fieldB: 99,
                fieldC: Math.random() * 100,
                fieldD: '123eedd'
            }
        ]
    }, {
        distinctId: 6,
        event: "Visited : Home Page",
        browser: 'Chrome',
        city: "New Delhi",
        country: "India",
        time: "5 min. ago",
        expand: [
            {
                fieldA: 'test1',
                fieldB: 99,
                fieldC: Math.random() * 100,
                fieldD: '123eedd'
            }, {
                fieldA: 'test1',
                fieldB: 99,
                fieldC: Math.random() * 100,
                fieldD: '123eedd'
            }
        ]
    }, {
        distinctId: 7,
        event: "Visited : Home Page",
        browser: 'unknown',
        city: "New Delhi",
        country: "India",
        time: "13 min. ago",
        expand: [
            {
                fieldA: 'test1',
                fieldB: 99,
                fieldC: Math.random() * 100,
                fieldD: '123eedd'
            }, {
                fieldA: 'test1',
                fieldB: 99,
                fieldC: Math.random() * 100,
                fieldD: '123eedd'
            }
        ]
    }
];

function randomLabels() {
    let labels = [];
    for (let i = 0; i < 22; i++) {
        labels.push("Apr " + Math.ceil(Math.random() * 30));
    }
    return labels;
}

function randomDataset() {
    let datasets = [],
        data = [];
    for (let j = 0; j < 12; j++) {
        for (let i = 0; i < 22; i++) {
            data.push(Math.floor(Math.random() * 10));
        }
        datasets.push({
            label: 'View ' + (j + 1),
            data: data,
            backgroundColor: chartFillColors[j],
            borderColor: filterColors[j],
            fill: false,
            lineTension: '0.1',
            borderWidth: 1
        });
        data = [];
    }
    return datasets;
}
export const chartData = {
    labels: randomLabels(),
    datasets: randomDataset()
};
