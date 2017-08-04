import React, { Component } from 'react';

/*import components*/
import List from './../List';

class Sidebar extends Component {
    render() {

        const navList = [
            {
                name  : 'clock',
                value : 'Clock',
                route  : 'clock'
            }, {
                name  : 'todolist',
                value : 'Todo List',
                route  : 'todo'
            }
        ];

        return (
            <div className = 'col-sm-3 col-md-2 sidebar' id='sidebar'>
                <List   className = 'nav nav-sidebar'
                        list = { navList }/>
            </div>
        );
    }
}

export default Sidebar;