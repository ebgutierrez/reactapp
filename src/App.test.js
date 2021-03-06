import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import app from './reducers/reducers';

let store = createStore( app );

it('renders without crashing', () => {
    const div = document.createElement('div');
    
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        div
    );
});
