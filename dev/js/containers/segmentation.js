import React, {Component} from 'react';
import {Glyphicon, ButtonGroup, DropdownButton, MenuItem} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from "react-router";

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
                        <span class="segmentation-details-by-label">By</span>
                    </div>
                    <div class="segmentation-details-footer">
                        <button class="btn btn-info segmentation-details-show-btn">Show</button>
                    </div>
                </div>
                <div class="segmentation-chart">
                    <canvas id="segmentationChart" width="400" height="400"></canvas>
                </div>
                <div class="segmentation-data">
                    <table class="table table-striped header-fixed">
                        <thead>
                            <tr>
                                <td class="segmentation-data-table-heading">City</td>
                                <td class="segmentation-data-table-heading">Today</td>
                                <td class="segmentation-data-table-heading">Wed, Mar 8</td>
                                <td class="segmentation-data-table-heading">Wed, Mar 1</td>
                                <td class="segmentation-data-table-heading">Wed, Feb 22</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="segmentation-data-table-data">Delhi</td>
                                <td class="segmentation-data-table-data">0</td>
                                <td class="segmentation-data-table-data">8</td>
                                <td class="segmentation-data-table-data">1.4</td>
                                <td class="segmentation-data-table-data">2</td>
                            </tr>
                            <tr>
                                <td class="segmentation-data-table-data">Delhi</td>
                                <td class="segmentation-data-table-data">0</td>
                                <td class="segmentation-data-table-data">8</td>
                                <td class="segmentation-data-table-data">1.4</td>
                                <td class="segmentation-data-table-data">2</td>
                            </tr>
                            <tr>
                                <td class="segmentation-data-table-data">Delhi</td>
                                <td class="segmentation-data-table-data">0</td>
                                <td class="segmentation-data-table-data">8</td>
                                <td class="segmentation-data-table-data">1.4</td>
                                <td class="segmentation-data-table-data">2</td>
                            </tr>
                            <tr>
                                <td class="segmentation-data-table-data">Delhi</td>
                                <td class="segmentation-data-table-data">0</td>
                                <td class="segmentation-data-table-data">8</td>
                                <td class="segmentation-data-table-data">1.4</td>
                                <td class="segmentation-data-table-data">2</td>
                            </tr>
                            <tr>
                                <td class="segmentation-data-table-data">Delhi</td>
                                <td class="segmentation-data-table-data">0</td>
                                <td class="segmentation-data-table-data">8</td>
                                <td class="segmentation-data-table-data">1.4</td>
                                <td class="segmentation-data-table-data">2</td>
                            </tr>

                        </tbody>
                    </table>
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
