import React, { Component } from 'react';

class Clock extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            date : new Date()
        };
    }

    componentDidMount() {
        this.timerId = setInterval(
            ()=>this.tick(),
            1000);
    }

    componentWillUnmount() {
        clearInterval( this.timerId );
    }

    tick(){
        this.setState({
            date : new Date()
        });
    }

    render() {

        return (
            <div className = "panel panel-default">
                <div className = "panel-heading">
                    <h3 className = "panel-title">Time</h3>
                </div>
                <div className = "panel-body">
                    Today is {this.state.date.toLocaleString()}!
                </div>
            </div>
        );
    }
}

export default Clock;