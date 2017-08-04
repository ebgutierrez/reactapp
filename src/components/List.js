import React, { Component } from 'react';

/*import components*/
import ListItem from './ListItem';

class List extends Component {
    constructor( props ) {
        super( props );

        this.handleClick = this.handleClick.bind( this );
    }

    handleClick( link ) {
        let liEls = this.refs.navlist.children,
            key;

        for( key in liEls ) {
            
            if( !isNaN( key ) ) {

                if( liEls[ key ].getAttribute('data-link') === link ) {
                    liEls[ key ].setAttribute( 'class', 'active' );   
                } else {
                    liEls[ key ].setAttribute( 'class', '' );
                }
            }
        }
        
    }

    render() {
        const listItems = this.props.list.map( ( item ) => {
            return (
                <ListItem   key     = { item.name }
                            value   = { item.value }
                            link    = { item.link }
                            onClick = { this.handleClick }/>
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