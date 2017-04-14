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
    // datasets: [
    //     {
    //         label: '# of Votes',
    //         data: [
    //             0,
    //             0,
    //             2,
    //             0,
    //             0,
    //             0,
    //             0,
    //             1,
    //             0,
    //             0,
    //             0,
    //             0,
    //             1,
    //             0,
    //             3,
    //             0,
    //             0,
    //             0,
    //             0,
    //             2,
    //             0,
    //             0
    //         ],
    //         backgroundColor: "rgba(75,192,192,0.4)",
    //         borderColor: "rgba(75,192,192,1)",
    //         fill: false,
    //         lineTension: '0'
    //     }, {
    //         label: '# of Votes',
    //         data: [
    //             1,
    //             4,
    //             6,
    //             2,
    //             1,
    //             7,
    //             8,
    //             1,
    //             3,
    //             0,
    //             0,
    //             0,
    //             1,
    //             0,
    //             3,
    //             0,
    //             0,
    //             0,
    //             0,
    //             2,
    //             0,
    //             0
    //         ],
    //         backgroundColor: "rgba(75,100,192,0.4)",
    //         borderColor: "rgba(75,100,192,1)",
    //         fill: false,
    //         lineTension: '0'
    //     }, {
    //         label: '# of Votes',
    //         data: [
    //             3,
    //             9,
    //             5,
    //             2,
    //             1,
    //             7,
    //             8,
    //             1,
    //             3,
    //             0,
    //             0,
    //             0,
    //             1,
    //             0,
    //             3,
    //             0,
    //             0,
    //             0,
    //             0,
    //             2,
    //             0,
    //             0
    //         ],
    //         backgroundColor: "rgba(75,110,192,0.4)",
    //         borderColor: "rgba(75,110,192,1)",
    //         fill: false,
    //         lineTension: '0'
    //     }, {
    //         label: '# of Votes',
    //         data: [
    //             9,
    //             1,
    //             2,
    //             2,
    //             1,
    //             7,
    //             8,
    //             1,
    //             3,
    //             0,
    //             0,
    //             0,
    //             1,
    //             0,
    //             3,
    //             0,
    //             0,
    //             0,
    //             0,
    //             2,
    //             0,
    //             0
    //         ],
    //         backgroundColor: "rgba(75,120,192,0.4)",
    //         borderColor: "rgba(75,120,192,1)",
    //         fill: false,
    //         lineTension: '0'
    //     }, {
    //         label: '# of Votes',
    //         data: [
    //             7,
    //             5,
    //             0,
    //             2,
    //             1,
    //             7,
    //             8,
    //             1,
    //             3,
    //             0,
    //             0,
    //             0,
    //             1,
    //             0,
    //             3,
    //             0,
    //             0,
    //             0,
    //             0,
    //             2,
    //             0,
    //             0
    //         ],
    //         backgroundColor: "rgba(75,130,192,0.4)",
    //         borderColor: "rgba(75,130,192,1)",
    //         fill: false,
    //         lineTension: '0'
    //     }, {
    //         label: '# of Votes',
    //         data: [
    //             10,
    //             3,
    //             2,
    //             2,
    //             1,
    //             7,
    //             8,
    //             1,
    //             3,
    //             0,
    //             0,
    //             0,
    //             1,
    //             0,
    //             3,
    //             0,
    //             0,
    //             0,
    //             0,
    //             2,
    //             0,
    //             0
    //         ],
    //         backgroundColor: "rgba(75,140,192,0.4)",
    //         borderColor: "rgba(75,140,192,1)",
    //         fill: false,
    //         lineTension: '0'
    //     }, {
    //         label: '# of Votes',
    //         data: [
    //             4,
    //             4,
    //             1,
    //             2,
    //             1,
    //             7,
    //             8,
    //             1,
    //             3,
    //             0,
    //             0,
    //             0,
    //             1,
    //             0,
    //             3,
    //             0,
    //             0,
    //             0,
    //             0,
    //             2,
    //             0,
    //             0
    //         ],
    //         backgroundColor: "rgba(75,150,192,0.4)",
    //         borderColor: "rgba(75,150,192,1)",
    //         fill: false,
    //         lineTension: '0'
    //     }, {
    //         label: '# of Votes',
    //         data: [
    //             6,
    //             2,
    //             3,
    //             2,
    //             1,
    //             7,
    //             8,
    //             1,
    //             3,
    //             0,
    //             0,
    //             0,
    //             1,
    //             0,
    //             3,
    //             0,
    //             0,
    //             0,
    //             0,
    //             2,
    //             0,
    //             0
    //         ],
    //         backgroundColor: "rgba(75,160,192,0.4)",
    //         borderColor: "rgba(75,160,192,1)",
    //         fill: false,
    //         lineTension: '0'
    //     }, {
    //         label: '# of Votes',
    //         data: [
    //             2,
    //             7,
    //             5,
    //             2,
    //             1,
    //             7,
    //             8,
    //             1,
    //             3,
    //             0,
    //             0,
    //             0,
    //             1,
    //             0,
    //             3,
    //             0,
    //             0,
    //             0,
    //             0,
    //             2,
    //             0,
    //             0
    //         ],
    //         backgroundColor: "rgba(75,170,192,0.4)",
    //         borderColor: "rgba(75,170,192,1)",
    //         fill: false,
    //         lineTension: '0'
    //     }, {
    //         label: '# of Votes',
    //         data: [
    //             8,
    //             7,
    //             3,
    //             2,
    //             1,
    //             7,
    //             8,
    //             1,
    //             3,
    //             0,
    //             0,
    //             0,
    //             1,
    //             0,
    //             3,
    //             0,
    //             0,
    //             0,
    //             0,
    //             2,
    //             0,
    //             0
    //         ],
    //         backgroundColor: "rgba(75,180,192,0.4)",
    //         borderColor: "rgba(75,180,192,1)",
    //         fill: false,
    //         lineTension: '0'
    //     }, {
    //         label: '# of Votes',
    //         data: [
    //             9,
    //             1,
    //             0,
    //             2,
    //             1,
    //             7,
    //             8,
    //             1,
    //             3,
    //             0,
    //             0,
    //             0,
    //             1,
    //             0,
    //             3,
    //             0,
    //             0,
    //             0,
    //             0,
    //             2,
    //             0,
    //             0
    //         ],
    //         backgroundColor: "rgba(75,90,192,0.4)",
    //         borderColor: "rgba(75,90,192,1)",
    //         fill: false,
    //         lineTension: '0'
    //     }, {
    //         label: '# of Votes',
    //         data: [
    //             3,
    //             4,
    //             6,
    //             2,
    //             1,
    //             7,
    //             8,
    //             1,
    //             3,
    //             0,
    //             0,
    //             0,
    //             1,
    //             0,
    //             3,
    //             0,
    //             0,
    //             0,
    //             0,
    //             2,
    //             0,
    //             0
    //         ],
    //         backgroundColor: "rgba(75,80,192,0.4)",
    //         borderColor: "rgba(75,80,192,1)",
    //         fill: false,
    //         lineTension: '0'
    //     }
    // ]
    datasets: randomDataset()
};
