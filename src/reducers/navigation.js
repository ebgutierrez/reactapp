import {CHANGE_NAV} from './../actions/actions';

const nav = ( state = { route : 'clock' }, action ) => {

    switch( action.type ) {
        case CHANGE_NAV:
            return Object.assign({}, state, {
                route: action.route
            });
        default:
            return state;
    }
}

export default nav;