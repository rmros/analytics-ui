import React, {Component} from 'react';
import {Glyphicon} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from "react-router";

class LiveView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>Live View</div>

        );
    }

}
function mapStateToProps(state) {
    return {document: state.activeDoc};
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(LiveView);
