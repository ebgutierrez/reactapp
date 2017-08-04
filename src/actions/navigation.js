/*
 * Actions
 */
export const CHANGE_NAV = 'CHANGE_NAV';


/*
 * Actions creators
 */
export default function changeNav( route ) {
    return {
        type : CHANGE_NAV,
        route
    }
}