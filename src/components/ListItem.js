import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListItem extends Component {
    constructor( props ) {
        super( props );

        this.handleClick = this.handleClick.bind( this );
    }

    handleClick ( ) {        
        this.props.onClick( this.props.route );
    }

    render() {
        return (
            <li onClick = { this.handleClick } data-route = {this.props.route} ><Link to={ `${this.props.route}` }>{ this.props.value }</Link></li>
        );
    }
}

export default ListItem;