import React, {Component} from 'react';
import {ButtonGroup, DropdownButton, MenuItem, Checkbox} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from "react-router";
import QueryStep from '../elements/queryStep.js';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {DateRange, defaultRanges} from 'react-date-range';
import ReactTooltip from 'react-tooltip';
import {fetchAllEvents} from '../actions/index';

class Segementation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            queryStepCount: 0,
            queryArr: [],
            rangePicker: {},
            andQuerySelected: true
        };
    }
    componentDidUpdate() {
        $('.segmentation-event-list-item').click(function() {
            console.log('clicked');
            $('#segmentation-event-dropdown').text($(this).text());
        });

        $('.segmentation-chart-filter').children().find('.checkbox-design').each(function() {
            let randomColor = Math.floor(Math.random() * 16777215).toString(16);

            $(this).css("background-color", "#" + randomColor);
        });

        $('.segmentation-chart-filter-item').click(function() {
            $(this).find('div').toggleClass('white');
        })

    }

    componentDidMount() {
        $('.segmentation-chart-filter').children().find('.checkbox-design').each(function() {
            let randomColor = Math.floor(Math.random() * 16777215).toString(16);

            $(this).css("background-color", "#" + randomColor);
        });

        $('.segmentation-chart-filter-item').click(function() {
            $(this).find('div').toggleClass('white');
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
    toggleQuerySwitch() {
        this.state.andQuerySelected = !this.state.andQuerySelected;
        this.setState(this.state);
    }
    renderAllEventList() {
        if (this.props.allEvents) {
            let allEvents = this.props.allEvents.map((eventName, i) => {
                return (
                    <MenuItem class="segmentation-event-list-item" eventKey={i} key={i}>{eventName}</MenuItem>
                );
            });
            return allEvents;
        }
    }

    handleChange(which, payload) {
        this.setState({[which]: payload});
    }

    addQueryStep() {
        this.state.queryStepCount++;
        let arr = this.state.queryArr;
        arr.push(<QueryStep key={this.state.queryStepCount} index={this.state.queryStepCount - 1} deleteQuery={this.deleteQueryStep.bind(this)}/>);
        this.state.queryArr = arr;
        this.setState(this.state);
        //  this.renderQuerySteps();
    }
    renderChartFilters() {

        if (this.props.allEvents) {
            let allEvents = this.props.allEvents.map((eventName, i) => {
                return (
                    <div class=" segmentation-chart-filter-list col-md-2 col-xs-3" key={i}>
                        <label class="segmentation-chart-filter-item">
                            <div class="checkbox-design">{' '}</div>
                            {eventName}
                        </label>
                    </div>
                );
            });
            return allEvents;
        }
    }

    deleteQueryStep(index) {
        console.log(index);
        this.state.queryArr = this.state.queryArr.filter((element) => {
            return (element.props.index !== index)
        });
        this.state.queryStepCount--;
        this.setState(this.state);

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
        const format = 'MMM D\' YYYY';
        const allEventList = this.renderAllEventList();
        const chartFilters = this.renderChartFilters();

        return (
            <div>
                <div class="segmentation-details">
                    <div class="segmentation-details-header">
                        <ButtonGroup vertical>
                            <DropdownButton title="Select Event" id="segmentation-event-dropdown">
                                {allEventList}
                            </DropdownButton>
                        </ButtonGroup>
                    </div>
                    <div class="segmentation-details-body">
                        <div class="segmentation-details-label ">
                            <span onClick={this.toggleQuerySwitch.bind(this)} class={this.state.andQuerySelected
                                ? "segmentation-details-and-label and-or-label-background "
                                : "segmentation-details-and-label "}>AND</span>
                            <span onClick={this.toggleQuerySwitch.bind(this)} class={!this.state.andQuerySelected
                                ? "segmentation-details-or-label and-or-label-background "
                                : "segmentation-details-or-label "}>OR</span>
                        </div><br/>
                        <br></br>
                        {this.state.queryArr}
                        <i class="ion ion-plus-round segmentation-details-addrule-icon" onClick={this.addQueryStep.bind(this)}></i>
                    </div>
                    <div class="segmentation-details-footer">
                        <button class="btn btn-info segmentation-details-show-btn">Show</button>
                    </div>
                </div>
                <div class="segmentation-chart-header">
                    <div class="segmentation-date-range-selector">
                        <input class="segmentation-date-range-field" type='text' readOnly value={this.state.rangePicker['startDate'] && this.state.rangePicker['startDate'].format(format).toString()}/>
                        <input class="segmentation-date-range-field" type='text' readOnly value={this.state.rangePicker['endDate'] && this.state.rangePicker['endDate'].format(format).toString()}/>
                        <button class="btn btn-primary segmentation-done-btn">Done</button>
                        <img class="segmentation-compare-icon " data-tip data-for="edit-funnel-icon"/>
                        <ReactTooltip id='edit-funnel-icon' place="bottom" effect='solid'>
                            <span>{"Compare "}</span>
                        </ReactTooltip>
                        <div class="compare-filter-list">
                            <input class="form-control fs-select-event" placeholder="Select Event" type="text" list="eventsName"/>
                            <datalist id="eventsName">
                                <option value="Visted 1"></option>
                                <option value="Signup"/>
                            </datalist>
                        </div>

                    </div>
                    <div class="segmentation-chart-filter">
                        {chartFilters}
                    </div>
                    <div class="segmentation-date-range">
                        <DateRange ranges={defaultRanges} onInit={this.handleChange.bind(this, 'rangePicker')} onChange={this.handleChange.bind(this, 'rangePicker')}/>
                    </div>
                    {/* <canvas id="segmentationChart" width="400px" height="400px"></canvas> */}
                </div>
                <div class="segmentation-chart">
                    <canvas id="segmentationChart" width="400px" height="400px"></canvas>
                </div>
                <div class="segmentation-data">
                    <BootstrapTable height={'200px'} data={tableData} options={options} hover expandableRow={this.isExpandableRow} expandComponent={this.expandComponent} search={true} trClassName='liveview-table'>
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
    const {allEvents, appInitSuccess, init, fetchingEvents} = state.events;
    return {allEvents: allEvents, appInitSuccess: appInitSuccess, fetchingEvents: fetchingEvents, init: init};
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchAllEvents: fetchAllEvents
    }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Segementation);
