import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from "react-router";
import QueryStep from '../elements/queryStep.js';

class CreateFunnel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            steps: 2
        };
    }

    renderFunnelSteps

    render() {
        return (
            <div>
                <div class="cf-heading">Create a new funnel</div>
                <div class="cf-body">
                    <input class="form-control" placeholder="Enter funnel name"/>
                    <div class="funnelStep">
                        <div class="fs-heading">
                            <i class="ion ion-navicon-round"></i>
                            &nbsp;Step 1
                            <i class="ion ion-close-circled pull-right fs-close-icon"></i>
                        </div>
                        <QueryStep/>
                    </div>
                    <div class="funnelStep">
                        <div class="fs-heading">
                            <i class="ion ion-navicon-round"></i>
                            &nbsp;Step 1
                            <i class="ion ion-close-circled pull-right fs-close-icon"></i>
                        </div>
                        <QueryStep/>
                    </div>
                    <div class="funnelStep">
                        <div class="fs-heading">
                            <i class="ion ion-navicon-round"></i>
                            &nbsp;Step 1
                            <i class="ion ion-close-circled pull-right fs-close-icon"></i>
                        </div>
                        <QueryStep/>
                    </div>
                    <div class="funnelStep">
                        <div class="fs-heading">
                            <i class="ion ion-navicon-round"></i>
                            &nbsp;Step 1
                            <i class="ion ion-close-circled pull-right fs-close-icon"></i>
                        </div>
                        <QueryStep/>
                    </div>
                    <div class="funnelStep">
                        <div class="fs-heading">
                            <i class="ion ion-navicon-round"></i>
                            &nbsp;Step 1
                            <i class="ion ion-close-circled pull-right fs-close-icon"></i>
                        </div>
                        <QueryStep/>
                    </div>
                </div>

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
export default connect(mapStateToProps, matchDispatchToProps)(CreateFunnel);
