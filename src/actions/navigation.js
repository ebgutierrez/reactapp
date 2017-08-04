/*
 * Actions
 */
export const CHANGE_NAV = 'CHANGE_NAV';


/*
 * Actions creators
 */
export const changeNav = ( route ) => {
    return {
        type : CHANGE_NAV,
        route
    }
}