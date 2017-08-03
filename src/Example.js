import React, { Component } from 'react';
import './Example.css';

import List from './List';
import Clock from './Clock';
import PanelHeader from './Panel/PanelHeader';

class Example extends Component {
    constructor( props ) {
        super( props );

        this.handleNavClick = this.handleNavClick.bind( this );

        this.state = {
            component : '',
            title : ''
        };
    }

    handleNavClick( component, title ) {
        console.log('component from example', component );
        this.setState({
            component : component,
            title : title
        });
    }

    render() {
        const navList = [
            {
                name : 'clock',
                value  : 'Clock',
                component : <Clock show={true}/>
            }, {
                name : 'todolist',
                value  : 'Todo List',
                component : 'TodoList page under construction'
            }
        ];

        let rightPanel = '';

        if( this.state.component ) {
            rightPanel = (
                <div className='inner-panel'>
                    <PanelHeader title={this.state.title}/>
                    <div className='panel-body'>
                        { this.state.component }
                    </div>
                </div>
            );
        }

        return (
            <div className='Example'>
                <div className='panel left w25'>
                    <div className='inner-panel'>
                        <PanelHeader title={'Navigation'}/>
                        <div className='panel-body'>
                            <List   list={navList}
                                    onNavClick={this.handleNavClick}/>
                        </div>
                    </div>
                </div>
                <div className='panel right w75'>
                    {rightPanel}
                </div>
                <div className='clear'></div>
            </div>
        );
    }
}

export default Example;