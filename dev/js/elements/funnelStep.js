import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from "react-router";

class FunnelStep extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div class="funnelStep">
                <div class="fs-heading">
                    <i class="ion ion-navicon-round"></i>
                    &nbsp;Create a new funnel</div>
                <div class="fs-body">
                    <input class="form-control" placeholder="Enter funnel name2"/>
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
export default connect(mapStateToProps, matchDispatchToProps)(FunnelStep);
