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

const logger = createLogger();
const store = createStore(allReducers, applyMiddleware(thunk, promise, logger));

ReactDOM.render(
    <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}></Route>
        <Route path="/:appId" component={App}>
            <IndexRoute component={LiveView}/>
            <Route path="segmentation" component={Segmentation}></Route>
            <Route path="funnel" component={Funnel}></Route>
            <Route path="live" name="live" component={LiveView}></Route>
        </Route>
    </Router>
</Provider>, document.getElementById('root'));
