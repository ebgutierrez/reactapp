import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Show the list of comments
 */
class Comments extends Component {

    constructor( props ){
        super( props );

        this.getAbbrevName = this.getAbbrevName.bind( this );
        this.getCommentCount = this.getCommentCount.bind( this );
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

    getCommentCount() {

        console.log('comment count here');

        const count = this.props.comments.length;
        var   countSuffix = 'Comment';

        console.log('count', count, this.props.comments);
        if( count > 1 ) {
            countSuffix += 's';            
        }

        return count + ' ' + countSuffix;
    }

    render() {
        const commentList = this.props.comments.map( (comment) => {

            const abbrevNames = this.getAbbrevName( comment.name );

            return (
                <li className = 'row' key = { comment.id }>
                    <div className = 'col-xs-2 col-sm-1'>
                        <div className = 'abbrev-name'>{ abbrevNames }</div>
                    </div>
                    <div className = 'col-xs-9 col-sm-11 comment'>
                        <div className = 'name'>{ comment.name }</div>
                        <div className = 'date'>{ comment.date }</div>
                        <div className = 'content'>{ comment.comment }</div>
                    </div>
                </li>
            );
        } );

        return (
            <div className = 'comments' >
                <div className = 'comment-count'>{this.getCommentCount()}</div>
                <ul className = 'row comment-list'>
                    { commentList }
                </ul>
            </div>
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