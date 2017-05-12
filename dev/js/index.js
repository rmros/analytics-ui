import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory, browserHistory} from "react-router";

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import App from './components/App';
import Segmentation from './containers/segmentation';
import Funnel from './containers/funnel';
import LiveView from './containers/liveView';
import CreateFunnel from './containers/createFunnel';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

const logger = createLogger();
const store = createStore(allReducers, applyMiddleware(thunk, promise, logger));
const muiTheme = getMuiTheme({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.82 Safari/537.36',
    palette: {
        primary1Color: blue500,
        primary2Color: blue500,
        accent1Color: blue500,
        pickerHeaderColor: blue500
    }
});

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path=":appId" component={App}>
                <IndexRoute component={Segmentation}/>
                <Route path='funnel' component={Funnel}></Route>
                <Route path='segmentation' component={Segmentation}></Route>
                <Route path='live' component={LiveView}></Route>
            </Route>
            <Route path="/" component={App}/>
        </Router>
    </Provider>
</MuiThemeProvider>, document.getElementById('root'));
