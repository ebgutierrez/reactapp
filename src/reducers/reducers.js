import { combineReducers } from 'redux';

import nav from './navigation';
import comments from './comment';

/*reducer for app*/

const app = combineReducers({
    nav,
    comments
});

export default app;