/*
 * Actions
 */
export const CHANGE_NAV = 'CHANGE_NAV';
export const ADD_COMMENT = 'ADD_COMMENT';

let nextCommentId = 3;


/*
 * Actions creators
 */

/**
 * Handle change navigation
 * @param  {string} route The route
 * @return {object}       Action type and the route
 */
export const changeNav = ( route ) => {
    return {
        type : CHANGE_NAV,
        route
    }
}

/**
 * Handle adding of comment
 * @param  {string} name The name of the commentator
 * @param  {string} comment The comment
 * @return {object}       Action type and comment details
 */
export const addComment = ( name, comment ) => {
    return {
        type    : ADD_COMMENT,
        id      : nextCommentId++,
        name    : name,
        comment : comment
    }
}