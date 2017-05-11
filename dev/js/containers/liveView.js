import React, {Component} from 'react';
import {Accordion, Panel, Table, Modal, Button} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from "react-router";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import QueryStep from '../elements/queryStep.js';
import {tableData} from '../fakeAPI'

class BSTable extends React.Component {
    render() {
        if (this.props.data) {
            return (
                <BootstrapTable data={this.props.data} trClassName='liveview-inner-table'>
                    <TableHeaderColumn className="col-hidden" dataField='fieldA' isKey={true} columnClassName='liveview-inner-table-data'>Field A</TableHeaderColumn>
                    <TableHeaderColumn className="col-hidden" dataField='fieldB' columnClassName='liveview-inner-table-data'>Field B</TableHeaderColumn>
                    <TableHeaderColumn className="col-hidden" dataField='fieldC' columnClassName='liveview-inner-table-data'>Field C</TableHeaderColumn>
                    <TableHeaderColumn className="col-hidden" dataField='fieldD' columnClassName='liveview-inner-table-data'>Field D</TableHeaderColumn>
                </BootstrapTable>
            );
        } else {
            return (
                <p>?</p>
            );
        }
    }
}

class LiveView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            queryArr: [],
            queryStepCount: 0
        };
    }

    expandComponent(row) {
        return (<BSTable data={row.expand}/>);
    }

    isExpandableRow(row) {
        return true;
    }
    addQueryStep() {
        this.state.queryStepCount++;
        let arr = this.state.queryArr;
        arr.push(<QueryStep index={this.state.queryStepCount - 1} deleteQuery={this.deleteQueryStep.bind(this)}/>);
        this.state.queryArr = arr;
        this.setState(this.state);
        //  this.renderQuerySteps();
    }

    deleteQueryStep(index) {
        console.log(index);
        this.state.queryArr = this.state.queryArr.filter((element) => {
            return (element.props.index !== index)
        });
        this.state.queryStepCount--;
        this.setState(this.state);

    }
    openModal() {
        this.state.showModal = true;
        this.setState(this.state);
    }

    closeModal() {
        this.state.showModal = false;
        this.setState(this.state);
    }

    render() {

        const options = {
            noDataText: 'No Events Found!!'
        }
        return (
            <div>
                <div class="liveview-top-heading" onClick={this.openModal.bind(this)}>
                    <i class="ion ion-funnel filter-icon"/>Filter
                </div>
                <div class="liveview-table-div">
                    <BootstrapTable data={tableData} options={options} hover expandableRow={this.isExpandableRow} expandComponent={this.expandComponent} search={true} trClassName='liveview-table'>
                        <TableHeaderColumn dataField='event' dataSort={true} columnClassName="liveview-table-data">Event</TableHeaderColumn>
                        <TableHeaderColumn dataField='time' dataSort={true} columnClassName="liveview-table-data">Time</TableHeaderColumn>
                        <TableHeaderColumn dataField='browser' dataSort={true} columnClassName="liveview-table-data">Browser</TableHeaderColumn>
                        <TableHeaderColumn dataField='city' dataSort={true} columnClassName="liveview-table-data">City</TableHeaderColumn>
                        <TableHeaderColumn dataField='country' dataSort={true} columnClassName="liveview-table-data">Country</TableHeaderColumn>
                        <TableHeaderColumn dataField='distinctId' dataSort={true} isKey={true} columnClassName="liveview-table-data">Distinct Id</TableHeaderColumn>
                    </BootstrapTable>
                </div>
                <Modal class="liveview-modal " show={this.state.showModal} onHide={this.closeModal.bind(this)}>
                    <Modal.Header class="modal-header-style">
                        <Modal.Title>
                            <span class="modal-title">
                                New Folder
                            </span>
                            <img class="modal-icon-style pull-right"></img>
                            <div class="modal-title-inner-text">Create a new folder.</div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <input class="form-control fs-select-event" placeholder="Select Event" type="text" list="eventsName"/><br/>
                        <datalist id="eventsName">
                            <option value="Visted 1"/>
                            <option value="Signup"/>
                        </datalist><br/>
                        <span class="segmentation-details-by-label col-md-1">By</span><br/>
                        <br></br>
                        {this.state.queryArr}
                        <i class="ion ion-plus-round segmentation-details-addrule-icon" onClick={this.addQueryStep.bind(this)}></i>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn-primary create-btn">Create</Button>

                    </Modal.Footer>
                </Modal>
            </div>

        );
    }

}
function mapStateToProps(state) {
    return {};
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(LiveView);
