/*
 * Actions
 */
export const CHANGE_NAV = 'CHANGE_NAV';
export const ADD_COMMENT = 'ADD_COMMENT';

let nextCommentId = 2;


/*
 * Actions creators
 */
export const changeNav = ( route ) => {
    return {
        type : CHANGE_NAV,
        route
    }
}

export const addComment = ( name, comment ) => {
    return {
        type    : ADD_COMMENT,
        id      : nextCommentId++,
        name    : name,
        comment : comment
    }
}