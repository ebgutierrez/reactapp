// import { combineReducers } from 'redux';

import {CHANGE_NAV} from './../actions/navigation';

const initialState = {
    route : 'clock'
}

/*reducer for navigation*/
export default function navigation( state = initialState, action ) {
    switch( action.type ) {
        case CHANGE_NAV:
            return Object.assign({}, state, {
                route: action.route
            });
        default:
            return state;
    }
}