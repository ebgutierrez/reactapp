import React, { Component } from 'react';

/*import components*/
import ListItem from './ListItem';

class List extends Component {
    constructor( props ) {
        super( props );

        this.handleClick = this.handleClick.bind( this );
    }

    handleClick( route ) {
        let liEls = this.refs.navlist.children;

        this.props.onClick( route, liEls );
    }

    render() {
        const listItems = this.props.list.map( ( item ) => {
            return (
                <ListItem   key         = { item.name }
                            value       = { item.value }
                            route       = { item.route }
                            activeRoute = { this.props.activeRoute }
                            onClick     = { this.handleClick }/>
            );
        } );

        return (
            <ul ref='navlist' className = { this.props.className }>
                { listItems }
            </ul>
        );
    }
}

export default List;