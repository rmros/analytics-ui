import React from 'react';
import SideBar from '../containers/sidebar';
import {initApp, fetchAllEvents} from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory, Link} from 'react-router';
import {
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,
    Dropdown
} from 'react-bootstrap';

class App extends React.Component {
    constructor(props)
    {
        super(props);
        this.props.initApp('' + window.location.pathname.split('/')[1]);
        this.state = {
            scroll: {}
        };

    }
    navigate(route, opts) {
        if (opts) {
            browserHistory.push(route);
            this.props.initApp('' + window.location.pathname.split('/')[1]);
        } else {
            location.assign(route);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.init !== nextProps.init)
            this.props.fetchAllEvents();

        }

    render() {
        let allApps = '';
        const thisObj = this;

        if (this.props.allApps) {
            allApps = this.props.allApps.map((app, i) => {
                if (app.id != thisObj.props.appId)
                    return (
                        <MenuItem class={app.id == thisObj.props.appId
                            ? 'selected-app'
                            : ''} key={i} onClick={this.navigate.bind(this, '/' + app.id, true)}>
                            <i class="ion ion-android-cloud-outline dashboard-icon "></i>
                            &nbsp;{app.name}
                        </MenuItem>
                    );
                }
            )
        }
        let profilePic = <i class="ion ion-person profile-icon"></i>
        if (this.props.userProfilePic) {
            profilePic = <img src={this.props.userProfilePic} class="profilePic"></img>
        }
        const myAppsTitle = (
            <span >
                <i class="ion ion-android-cloud"></i>&nbsp; {this.props.appName
}
            </span>
        );
        return (

            <div class="container">
                <Navbar class="navbar-style navbar-border " collapseOnSelect fixedTop={true}>
                    <Navbar.Header>
                        <Navbar.Brand >
                            <a class="navbar-brand logo" href={DASHBOARD_URL}><img id="logo" src="/assets/img/cblogo.png" width="40px"/></a>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavDropdown class='appid-menuitem' eventKey={3} title={myAppsTitle} id="basic-nav-dropdown">
                                <li role="presentation" class="myApps-heading">My Apps</li>

                                {allApps}
                                <MenuItem divider/>
                                <MenuItem key={4} href={DASHBOARD_URL}>
                                    <i class="ion ion-android-apps dashboard-icon "></i>
                                    &nbsp; Dashboard</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <NavItem href={DASHBOARD_URL} class='dashboard-menuitem' onClick={this.navigate.bind(this, DASHBOARD_URL)}>
                                <i class="ion ion-android-apps dashboard-icon"></i>
                                &nbsp; Dashboard
                            </NavItem>

                            <NavDropdown eventKey={3} title={profilePic} id="basic-nav-dropdown" class="profile">

                                <MenuItem key={1} onClick={this.navigate.bind(this, DASHBOARD_URL + '/#/profile')}>
                                    Profile
                                </MenuItem>
                                <MenuItem key={2} onClick={this.navigate.bind(this, '#/')}>
                                    Logout
                                </MenuItem>
                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div class="container">
                    <h3>&nbsp;</h3>
                    <div className="row">
                        <div className=" col-md-2 col-sm-3 hidden-xs">
                            <SideBar location={this.props.location}/>
                        </div>
                        <div className="col-sm-9 col-xs-12 col-md-10 container-fluid">
                            <div class="below-navbar visible-xs-block ">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td class="top-menu-item">
                                                <i class="ion ion-pie-graph"></i>
                                                &nbsp;&nbsp;<span>Segementation</span>
                                            </td>
                                            <td class="top-menu-item">
                                                <i class="ion ion-funnel"></i>
                                                &nbsp;&nbsp;<span>Funnel</span>
                                            </td>
                                            <td class="top-menu-item">
                                                <i class="ion ion-ios-pulse-strong"></i>
                                                &nbsp;&nbsp;<span>Live View</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="mainbody">
                                {this.props.children}
                            </div>
                        </div>

                    </div>

                </div>
                <h3>&nbsp;</h3>

                <Navbar class="navbar-style navbar-border " collapseOnSelect fixedBottom={true}>
                    <Navbar.Brand>
                        <a class="footer-item" href="https://cloudboost.io">&copy; 2017 CloudBoost</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>

                    <Navbar.Collapse>
                        <Nav >
                            <NavItem eventKey={2} class="footer-item" href='https://cloudboost.io/terms' onClick={this.navigate.bind(this, 'https://cloudboost.io/terms')}>Terms</NavItem>
                            <NavItem eventKey={3} class="footer-item" onClick={this.navigate.bind(this, 'https://cloudboost.io/privacy')} href='https://cloudboost.io/privacy'>Privacy</NavItem>
                            <NavItem eventKey={4} class="footer-item" onClick={this.navigate.bind(this, 'https://slack.cloudboost.io/')} href='https://slack.cloudboost.io/'>Help</NavItem>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={6} class="footer-item" onClick={this.navigate.bind(this, 'https://tutorials.cloudboost.io/en/datastorage/files#')} href='https://tutorials.cloudboost.io/en/datastorage/files#'>Documentation</NavItem>

                        </Nav>

                    </Navbar.Collapse>
                </Navbar>

            </div>
        )
    }
}

function mapStateToProps(state) {
    const {
        allApps,
        appName,
        appId,
        userProfilePic,
        appInitSuccess,
        fetchingEvents,
        init
    } = state.events;
    return {
        allApps: allApps,
        appName: appName,
        appId: appId,
        userProfilePic: userProfilePic,
        appInitSuccess: appInitSuccess,
        fetchingEvents: fetchingEvents,
        init: init
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        initApp: initApp,
        fetchAllEvents: fetchAllEvents
    }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(App);
