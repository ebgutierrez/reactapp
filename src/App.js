import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';

class App extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            showClock : false
        };

        this.handleToggle = this.handleToggle.bind( this );
    }

    handleToggle() {
        this.setState( previousState => ({
            showClock : !previousState.showClock
        }));
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <button onClick={this.handleToggle}>
                    { this.state.showClock? 'Hide clock':'Show clock'}
                </button>
                <Clock show={this.state.showClock}/>
            </div>
        );
    }
}

export default App;
