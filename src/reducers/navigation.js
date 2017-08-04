import { combineReducers } from 'redux';

import CHANGE_NAV from './../actions/index';

const initialState = {
    route : 'clock'
}

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