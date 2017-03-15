import React, {Component} from 'react';
import {Glyphicon} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory, Link} from "react-router";

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    navigate(route) {
        browserHistory.push(route);
    }

    render() {

        return (
            <div class="affix">
                <div id="logo"></div>
                <br/>
                <div id="side-menu">
                    <ul >

                        <li class="side-menu-heading">
                            &nbsp;&nbsp;Engagement
                        </li>
                        <li class="side-menu-items" onClick={this.navigate.bind(this, 'segmentation')}>
                            <i class="ion ion-pie-graph"></i>
                            &nbsp;&nbsp;Segementation
                        </li>
                        <li class="side-menu-items" onClick={this.navigate.bind(this, 'funnel')}>
                            <i class="ion ion-funnel"></i>
                            &nbsp;&nbsp;Funnel
                        </li>
                        <li class="side-menu-items" onClick={this.navigate.bind(this, 'live')}>
                            <i class="ion ion-ios-pulse-strong"></i>
                            &nbsp;&nbsp;Live View
                        </li>

                    </ul>
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
export default connect(mapStateToProps, matchDispatchToProps)(SideBar);
