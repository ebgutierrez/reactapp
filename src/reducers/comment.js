import {ADD_COMMENT} from './../actions/actions';

const initialState = {
    route : 'clock',
    comments : []
};

const comments = ( state = initialState, action ) => {
    switch( action.type ) {
        case ADD_COMMENT:

            return Object.assign({}, state, {
                comments: [
                    ...state.comments,
                    {
                        id : action.id,
                        name : action.name,
                        comment : action.comment
                    }
                ]
            })
        default:
            return state;
    }
}

export default comments;