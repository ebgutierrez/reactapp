import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

/*import components*/
import Header from './components/Header/Header';
import Sidebar from './components/Body/Sidebar';
import Clock from './Clock';

/*import css*/
import './resources/dashboard.css';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div className = 'container-fluid'>
                        <div className = 'row'>
                            <Sidebar />
                            <div className = 'col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main'>
                                <Route path='/clock' component={Clock}></Route>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
