import React, {Component} from 'react';
import {ButtonGroup, DropdownButton, MenuItem} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from "react-router";
import QueryStep from '../elements/queryStep.js';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class Segementation extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        $('#segmentation-event-dropdown').text('Select Event');

        $('.segmentation-event-list-item').click(function() {
            $('#segmentation-event-dropdown').text($(this).text());
        })
        var ctx = $("#segmentationChart");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
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
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    ]
                }
            }
        });

    }
    render() {
        const tableData = [
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
        const options = {
            noDataText: 'No Events Found!!'
        }

        return (
            <div>
                <div class="segmentation-details">
                    <div class="segmentation-details-header">
                        <ButtonGroup vertical>
                            <DropdownButton title="Dropdown" id="segmentation-event-dropdown">
                                <MenuItem class="segmentation-event-list-item" eventKey="2">Custom Event 1</MenuItem>
                                <MenuItem class="segmentation-event-list-item" eventKey="3">Custom Event 2</MenuItem>
                                <MenuItem class="segmentation-event-list-item" eventKey="4">Custom Event 3</MenuItem>
                                <MenuItem class="segmentation-event-list-item" eventKey="5">Custom Event 4</MenuItem>
                                <MenuItem class="segmentation-event-list-item" eventKey="6">Custom Event 5</MenuItem>
                                <MenuItem class="segmentation-event-list-item" eventKey="11">Custom Event 6</MenuItem>
                                <MenuItem class="segmentation-event-list-item" eventKey="7">Custom Event 7</MenuItem>
                                <MenuItem class="segmentation-event-list-item" eventKey="8">Custom Event 8</MenuItem>
                                <MenuItem class="segmentation-event-list-item" eventKey="9">Custom Event 9</MenuItem>
                                <MenuItem class="segmentation-event-list-item" eventKey="10">Custom Event 10</MenuItem>
                            </DropdownButton>
                        </ButtonGroup>
                    </div>
                    <div class="segmentation-details-body">
                        <span class="segmentation-details-by-label col-md-1">By</span><br/>
                        <br></br>
                        <QueryStep/><QueryStep/><QueryStep/><QueryStep/>
                    </div>
                    <div class="segmentation-details-footer">
                        <button class="btn btn-info segmentation-details-show-btn">Show</button>
                    </div>
                </div>
                <div class="segmentation-chart">
                    <canvas id="segmentationChart" width="400" height="400"></canvas>
                </div>
                <div class="segmentation-data">
                    <BootstrapTable data={tableData} options={options} hover expandableRow={this.isExpandableRow} expandComponent={this.expandComponent} search={true} trClassName='liveview-table'>
                        <TableHeaderColumn dataField='event' dataSort={true} columnClassName="liveview-table-data">Event</TableHeaderColumn>
                        <TableHeaderColumn dataField='time' dataSort={true} columnClassName="liveview-table-data">Time</TableHeaderColumn>
                        <TableHeaderColumn dataField='browser' dataSort={true} columnClassName="liveview-table-data">Browser</TableHeaderColumn>
                        <TableHeaderColumn dataField='city' dataSort={true} columnClassName="liveview-table-data">City</TableHeaderColumn>
                        <TableHeaderColumn dataField='country' dataSort={true} columnClassName="liveview-table-data">Country</TableHeaderColumn>
                        <TableHeaderColumn dataField='distinctId' dataSort={true} isKey={true} columnClassName="liveview-table-data">Distinct Id</TableHeaderColumn>
                    </BootstrapTable>
                </div>

            </div>

        );
    }

}
function mapStateToProps(state) {
    return {document: state.activeDoc};
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Segementation);
