import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/*import components*/

class Sidebar extends Component {

    constructor( props ) {
        super( props );

        this.handleClick = this.handleClick.bind( this );
    }

    handleClick( e ) {
        let liEls = this.refs.navlist.children,
            route = e.target.getAttribute( 'data-route' );

        this.props.onNavClick( route, liEls );
    }

    render() {

        const navList = [
            {
                name  : 'clock',
                value : 'Clock',
                route : 'clock'
            }, {
                name  : 'comments',
                value : 'Comments',
                route : 'comments'
            }
        ];

        const listItems = navList.map( (item) => {

            const active = ( item.route === this.props.hashRoute ) ? 'active' : '';

            return (
                <li     key        = { item.name }
                        className  = { active }
                        onClick    = { this.handleClick }
                        data-route = { item.route } >
                    
                    <Link   to={ `${item.route}` }
                            data-route = { item.route } >{ item.value }</Link>
                
                </li>
            );
        });

        return (
            <div className = 'col-sm-3 col-md-2 sidebar' id='sidebar'>

                <ul ref='navlist' className = 'nav nav-sidebar' >
                    { listItems }
                </ul>
            </div>
        );
    }
}

Sidebar.propTypes = {
    onNavClick : PropTypes.func.isRequired
};

export default Sidebar;