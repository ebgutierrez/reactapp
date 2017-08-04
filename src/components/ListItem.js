import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListItem extends Component {
    constructor( props ) {
        super( props );

        this.handleClick = this.handleClick.bind( this );
    }

    handleClick ( ) {        
        this.props.onClick( this.props.link );
    }

    render() {
        return (
            <li onClick = { this.handleClick } data-link = {this.props.link} ><Link to={ `${this.props.link}` }>{ this.props.value }</Link></li>
        );
    }
}

export default ListItem;