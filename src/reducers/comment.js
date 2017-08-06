import {ADD_COMMENT} from './../actions/actions';

const initialState = [
    {
        id      : 1,
        name    : 'John Smith',
        comment : 'This is a good exercise project.',
        date    : new Date().toLocaleString()
    }, {
        id      : 2,
        name    : 'Egee',
        comment : 'Thanks. I hope I will get the job.',
        date    : new Date().toLocaleString()
    }
];

const comments = ( state = initialState, action ) => {
    switch( action.type ) {
        case ADD_COMMENT:
            return Object.assign([], state, [
                ...state,
                {
                    id      : action.id,
                    name    : action.name,
                    comment : action.comment,
                    date    : new Date().toLocaleString()
                }
            ]);
        default:
            return state;
    }
}

export default comments;