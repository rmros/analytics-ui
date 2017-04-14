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

export const chartData = {
    labels: [
        "Feb 1 ",
        "Feb 1 ",
        "Feb 1 ",
        "Feb 1 ",
        "Feb 1 ",
        "Feb 1 ",
        "Feb 1 ",
        "Feb 1 ",
        "Feb 1 ",
        "Feb 1 ",
        "Feb 1 ",
        "Feb 1 ",
        "Feb 1 ",
        "Feb 1 ",
        "Feb 1 ",
        "Feb 1 ",
        "Feb 1 ",
        "Feb 1 ",
        "Feb 1 ",
        "Feb 1 ",
        "Feb 1 ",
        "Feb 1 "
    ],
    datasets: [
        {
            label: '# of Votes',
            data: [
                0,
                0,
                2,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                3,
                0,
                0,
                0,
                0,
                2,
                0,
                0
            ],
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            fill: false,
            lineTension: '0'
        }
    ]
};
