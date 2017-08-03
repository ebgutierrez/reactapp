import React, { Component } from 'react';

import ListItem from './ListItem';

class List extends Component {

    constructor( props ) {
        super( props );

        this.state = {
            list : this.props.list
        };
    }

    render() {
        const listItems = this.state.list.map( ( item ) => {
            return (
                <ListItem   key={ item.name }
                            value={ item.value }
                            component={ item.component }
                            onNavClick={ this.props.onNavClick }/>
            );
        } );
        return (
            <ul>
                {listItems}
            </ul>
        );
    }
}

export default List;