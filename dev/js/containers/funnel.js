import React, {Component} from 'react';
import {
    Glyphicon,
    ButtonGroup,
    DropdownButton,
    MenuItem,
    Modal,
    Button
} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from "react-router";
import Chart from 'chart.js';
import ReactTooltip from 'react-tooltip';
import {DateRange, defaultRanges} from 'react-date-range';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class Funnel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rangePicker: {},
            showModal: false
        };

    }
    componentDidMount() {
        console.log('jjj',);
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
    closeModal() {
        this.setState({showModal: false})
    }
    openModal() {
        this.setState({showModal: true})
    }

    handleChange(which, payload) {
        this.setState({[which]: payload})
    }

    render() {
        const format = 'MMM D\' YYYY';
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
                <div class="funnel-details">
                    <ButtonGroup vertical>
                        <DropdownButton title="Dropdown" id="funnel-event-dropdown">
                            <MenuItem class="funnel-event-list-item" eventKey="2">Custom Funnel 1</MenuItem>
                            <MenuItem class="funnel-event-list-item" eventKey="3">Custom Funnel 2</MenuItem>
                            <MenuItem class="funnel-event-list-item" eventKey="4">Custom Funnel 3</MenuItem>
                            <MenuItem class="funnel-event-list-item" eventKey="5">Custom Funnel 4</MenuItem>
                            <MenuItem class="funnel-event-list-item" eventKey="6">Custom Funnel 5</MenuItem>
                            <MenuItem class="funnel-event-list-item" eventKey="11">Custom Funnel 6</MenuItem>
                            <MenuItem class="funnel-event-list-item" eventKey="7">Custom Funnel 7</MenuItem>
                            <MenuItem class="funnel-event-list-item" eventKey="8">Custom Funnel 8</MenuItem>
                            <MenuItem class="funnel-event-list-item" eventKey="9">Custom Funnel 9</MenuItem>
                            <MenuItem class="funnel-event-list-item" eventKey="10">Custom Funnel 10</MenuItem>
                        </DropdownButton>
                    </ButtonGroup>
                    <button data-tip data-for="edit-funnel-icon" class="btn btn-default funnel-details-edit-icon">
                        <span class="ion ion-edit"></span>
                        <ReactTooltip id='edit-funnel-icon' place="bottom" effect='solid'>
                            <span>{"Edit Funnel "}</span>
                        </ReactTooltip>
                    </button>
                    <button data-tip data-for="new-funnel-icon" class="btn btn-default">
                        <i class="ion ion-plus-round"></i>
                        <ReactTooltip id='new-funnel-icon' place="bottom" effect='solid'>
                            <span>{"New Funnel "}</span>
                        </ReactTooltip>
                    </button>
                    <button data-tip data-for="funnel-help-icon" class="btn btn-default pull-right">
                        <i class="ion ion-help"></i>
                        <ReactTooltip id='funnel-help-icon' place="bottom" effect='solid'>
                            <span>{"Help"}</span>
                        </ReactTooltip>
                    </button>
                    <button data-tip data-for="funnel-close-icon" onClick={this.openModal.bind(this)} class="btn btn-default pull-right funnel-close-icon">
                        <i class="ion ion-close-round"></i>
                        <ReactTooltip id='funnel-close-icon' place="bottom" effect='solid'>
                            <span>{"Delete Funnel "}</span>
                        </ReactTooltip>
                    </button>

                </div>
                <div class="funnel-chart">
                    <div class="funnel-date-range-selector">
                        <input class="date-range-field" type='text' readOnly value={this.state.rangePicker['startDate'] && this.state.rangePicker['startDate'].format(format).toString()}/>
                        <input class="date-range-field" type='text' readOnly value={this.state.rangePicker['endDate'] && this.state.rangePicker['endDate'].format(format).toString()}/>
                        <button class="btn btn-primary funnel-done-btn">Done</button>
                        <span class="funnel-completion-percentage">1.16%</span>
                        <span class="funnel-completion-percentage-text">Completion rate</span>
                    </div>
                    <div class="funnel-date-range">
                        <DateRange ranges={defaultRanges} onInit={this.handleChange.bind(this, 'rangePicker')} onChange={this.handleChange.bind(this, 'rangePicker')}/>
                    </div>
                    <br></br>
                    <canvas id="funnelChart" width="400" height="400"></canvas>
                </div>
                <div class="funnel-data">
                    <div class="funnel-data-overview-span">
                        Overview
                    </div>
                    <div class="funnel-data-setting"></div>
                    <div class="funnel-data-table">
                        <BootstrapTable height={'200px'} data={tableData} options={options} hover trClassName=''>
                            <TableHeaderColumn dataField='event' dataSort={true} columnClassName="liveview-table-data">Event</TableHeaderColumn>
                            <TableHeaderColumn dataField='time' dataSort={true} columnClassName="liveview-table-data">Time</TableHeaderColumn>
                            <TableHeaderColumn dataField='browser' dataSort={true} columnClassName="liveview-table-data">Browser</TableHeaderColumn>
                            <TableHeaderColumn dataField='city' dataSort={true} columnClassName="liveview-table-data">City</TableHeaderColumn>
                            <TableHeaderColumn dataField='country' dataSort={true} columnClassName="liveview-table-data">Country</TableHeaderColumn>
                            <TableHeaderColumn dataField='distinctId' dataSort={true} isKey={true} columnClassName="liveview-table-data">Distinct Id</TableHeaderColumn>
                        </BootstrapTable>
                    </div>
                </div>
                <Modal show={this.state.showModal} onHide={this.closeModal.bind(this)}>
                    <Modal.Header class="delete-modal-header-style">
                        <Modal.Title>
                            Delete
                            <img class="delete-modal-icon-style pull-right"></img>
                            <div class="modal-title-inner-text">You are about to delete

                            </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body class="delete-modal-body">
                        Are you sure you want to delete

                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn-primary delete-btn-modal">Delete</Button>
                    </Modal.Footer>
                </Modal>

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
