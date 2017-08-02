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

        if( !this.props.show ) {
            return null;
        }

        return (
            <div>
                <h1>Time</h1>
                <h2>Today is {this.state.date.toLocaleString()}!</h2>
            </div>
        );
    }
}

export default Clock;