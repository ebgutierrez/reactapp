import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Show the list of comments
 */
class Comments extends Component {

    constructor( props ){
        super( props );

        this.getAbbrevName = this.getAbbrevName.bind( this );
    }

    /**
     * Generates abbreviated name, gettng only the initials from the first two names
     * @param  {string} name The name
     * @return {string}      Abbreviated name
     */
    getAbbrevName( name ) {
        const names = name.split(' ');
        var abbrevNames = '',
            index,
            length;

        if( names.length > 2 ) {
            length = 2;
        } else if( names.length < 2 ) {
            length = 1;
        } else {
            length = 2;
        }

        for( index = 0; index < length; index++ ) {
            abbrevNames = abbrevNames.concat( names[ index ].charAt(0).toUpperCase() );
        }

        return abbrevNames;
    }

    render() {
        const commentList = this.props.comments.map( (comment) => {

            const abbrevNames = this.getAbbrevName( comment.name );

            return (
                <li className = 'row' key = { comment.id }>
                    <div className = 'col-sm-2'>
                        <div className = 'abbrev-name'>{ abbrevNames }</div>
                        <div className = 'name'>{ comment.name }</div>
                    </div>
                    <div className = 'col-sm-10 comment'>
                        <div className = 'date'>{ comment.date }</div>
                        <div className = 'content'>{ comment.comment }</div>
                    </div>
                </li>
            );
        } );

        return (
            <ul className = 'row comment-list'>
                { commentList }
            </ul>
        );
    }
}

/**
 * Set prop types of the Comments component
 * @type {Object}
 */
Comments.propTypes = {
    comments : PropTypes.array
};

export default Comments;