import React, { Component } from 'react';

/*import components*/
import List from './../List';

class Sidebar extends Component {
    render() {

        const navList = [
            {
                name  : 'clock',
                value : 'Clock',
                link  : 'clock'
            }, {
                name  : 'todolist',
                value : 'Todo List',
                link  : 'todo'
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