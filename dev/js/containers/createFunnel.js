import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from "react-router";

class CreateFunnel extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div class="cf-heading">Create a new funnel</div>
                <div class="cf-body">
                    <input class="form-control" place holder="Enter funnel name"/>
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
export default connect(mapStateToProps, matchDispatchToProps)(CreateFunnel);
