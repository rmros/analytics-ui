import React, {Component} from 'react';
import {Glyphicon, ButtonGroup, DropdownButton, MenuItem} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from "react-router";
import Chart from 'chart.js';

class Funnel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: this.props.location.pathname
        };

    }
    componentDidMount() {

        var ctx = $("#funnelChart");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [
                    "Visited : Home Page", "Visited : Pricing Page", "Visited : Sign Up Page"
                ],
                datasets: [
                    {
                        label: '# of Votes',
                        data: [
                            12, 19, 3
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'
                        ],
                        borderWidth: 1
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

        return (
            <div>
                <div class="funnel-details">
                    <ButtonGroup vertical>
                        <DropdownButton title="Dropdown" id="funnel-event-dropdown">
                            <MenuItem class="funnel-event-list-item" eventKey="2">Custom Event 1</MenuItem>
                            <MenuItem class="funnel-event-list-item" eventKey="3">Custom Event 2</MenuItem>
                            <MenuItem class="funnel-event-list-item" eventKey="4">Custom Event 3</MenuItem>
                            <MenuItem class="funnel-event-list-item" eventKey="5">Custom Event 4</MenuItem>
                            <MenuItem class="funnel-event-list-item" eventKey="6">Custom Event 5</MenuItem>
                            <MenuItem class="funnel-event-list-item" eventKey="11">Custom Event 6</MenuItem>
                            <MenuItem class="funnel-event-list-item" eventKey="7">Custom Event 7</MenuItem>
                            <MenuItem class="funnel-event-list-item" eventKey="8">Custom Event 8</MenuItem>
                            <MenuItem class="funnel-event-list-item" eventKey="9">Custom Event 9</MenuItem>
                            <MenuItem class="funnel-event-list-item" eventKey="10">Custom Event 10</MenuItem>
                        </DropdownButton>
                    </ButtonGroup>
                    <button class="btn btn-default funnel-details-edit-icon">
                        <i class="ion ion-edit"></i>
                    </button>
                    <button class="btn btn-default">
                        <i class="ion ion-plus-round"></i>
                    </button>
                    <button class="btn btn-default pull-right">
                        <i class="ion ion-close-round"></i>
                    </button>
                    <button class="btn btn-default pull-right">
                        <i class="ion ion-help"></i>
                    </button>
                </div>
                <div class="funnel-chart">
                    <canvas id="funnelChart" width="400" height="400"></canvas>
                </div>
                <div class="funnel-data">
                    <div class="funnel-data-overview-span">
                        Overview
                    </div>
                    <div class="funnel-data-setting"></div>
                    <div class="funnel-data-table">
                        <table class="table table-striped header-fixed">
                            <thead>
                                <tr>
                                    <td class="funnel-data-table-heading">City</td>
                                    <td class="funnel-data-table-heading">Today</td>
                                    <td class="funnel-data-table-heading">Wed, Mar 8</td>
                                    <td class="funnel-data-table-heading">Wed, Mar 1</td>
                                    <td class="funnel-data-table-heading">Wed, Feb 22</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="funnel-data-table-data">Delhi</td>
                                    <td class="funnel-data-table-data">0</td>
                                    <td class="funnel-data-table-data">8</td>
                                    <td class="funnel-data-table-data">1.4</td>
                                    <td class="funnel-data-table-data">2</td>
                                </tr>
                                <tr>
                                    <td class="funnel-data-table-data">Delhi</td>
                                    <td class="funnel-data-table-data">0</td>
                                    <td class="funnel-data-table-data">8</td>
                                    <td class="funnel-data-table-data">1.4</td>
                                    <td class="funnel-data-table-data">2</td>
                                </tr>
                                <tr>
                                    <td class="funnel-data-table-data">Delhi</td>
                                    <td class="funnel-data-table-data">0</td>
                                    <td class="funnel-data-table-data">8</td>
                                    <td class="funnel-data-table-data">1.4</td>
                                    <td class="funnel-data-table-data">2</td>
                                </tr>
                                <tr>
                                    <td class="funnel-data-table-data">Delhi</td>
                                    <td class="funnel-data-table-data">0</td>
                                    <td class="funnel-data-table-data">8</td>
                                    <td class="funnel-data-table-data">1.4</td>
                                    <td class="funnel-data-table-data">2</td>
                                </tr>
                                <tr>
                                    <td class="funnel-data-table-data">Delhi</td>
                                    <td class="funnel-data-table-data">0</td>
                                    <td class="funnel-data-table-data">8</td>
                                    <td class="funnel-data-table-data">1.4</td>
                                    <td class="funnel-data-table-data">2</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
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
export default connect(mapStateToProps, matchDispatchToProps)(Funnel);
