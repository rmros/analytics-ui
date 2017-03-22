import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {ButtonGroup, DropdownButton, MenuItem} from 'react-bootstrap';
import {connect} from 'react-redux';
import {browserHistory} from "react-router";

class QueryStep extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1
        };
    }

    deleteQuery() {
        this.props.deleteQuery(this.props.index);
    }
    render() {
        return (

            <div class="fs-body">
                <div class="fs-selection-row">
                    <input class="form-control fs-select-event" placeholder="Select Event" type="text" list="eventsName"/>
                    <datalist id="eventsName">
                        <option value="Visted 1"/>
                        <option value="Signup"/>
                    </datalist>
                    <i class="ion ion-ios-arrow-forward query_right_icon"></i>

                    <ButtonGroup vertical>
                        <DropdownButton title="Select Query" id="fs-query-dropdown">
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
                    <input class="form-control fs-select-value" placeholder="Select value" type="text" list="eventsName"/>
                    <datalist id="eventsName">
                        <option value="Visted 1"/>
                        <option value="Signup"/>
                    </datalist>
                    <i class="ion ion-close-round query_close_icon" onClick={this.deleteQuery.bind(this)}></i>

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
export default connect(mapStateToProps, matchDispatchToProps)(QueryStep);
