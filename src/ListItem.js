import React, { Component } from 'react';

class ListItem extends Component {
    constructor( props ) {
        super( props );

        this.handleClick = this.handleClick.bind( this );
    }

    handleClick( e ) {
        const props = this.props;

        props.onNavClick( props.component, props.value )
    }

    render() {
        return (
            <a href='#' onClick={ this.handleClick } >
                <li>{this.props.value}</li>
            </a>
        );
    }
}

export default ListItem;