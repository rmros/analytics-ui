import {combineReducers} from 'redux';
import EventReducer from './reducer-events';
import GroupedEventReducer from './groupedEvents'

const allReducers = combineReducers({events: EventReducer, groupedEvents: GroupedEventReducer});

export default allReducers
