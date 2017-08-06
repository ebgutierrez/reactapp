import React, { Component } from 'react';
import { connect } from 'react-redux';

/*import action*/
import { addComment } from '../../../actions/actions';

/**
 * Container to add the comment
 */
class AddComment extends Component {

    constructor( props ) {
        super( props );

        this.handleChange = this.handleChange.bind( this );
        this.handleSubmit = this.handleSubmit.bind( this );

        this.state = {
            name    : '',
            comment : ''
        };
    }

    /**
     * Handles input change from input fields
     * @param  {Object} e Event
     */
    handleChange( e ) {
        const target = e.target,
                value = target.value,
                name = target.name;

        this.setState({
            [ name ] : value
        });
    }

    /**
     * Handles form submit
     * @param  {Object} e Event
     * @return {Boolean}   Returns false or empty if input fields are empty
     */
    handleSubmit( e ) {
        e.preventDefault();

        if( !this.state.name.trim() || !this.state.comment.trim() ) {
            return;
        }

        this.props.dispatch( addComment( this.state.name.trim(), this.state.comment.trim() ) );

        this.setState({
            name    : '',
            comment : '' 
        });
    } 

    render() {
        return (
            <form onSubmit = { this.handleSubmit }>
                <div className = 'form-group'>
                    <input  type        = 'text'
                            className   = 'form-control'
                            id          = 'name'
                            placeholder = 'Name'
                            name        = 'name'
                            value       = { this.state.name }
                            onChange    = { this.handleChange }/>
                </div>
                <div className = 'form-group'>
                    <textarea   className   = 'form-control'
                                id          = 'comment'
                                placeholder = 'Comment'
                                name        = 'comment'
                                value       = { this.state.comment }
                                onChange    = { this.handleChange }/>
                </div>
                <button type='submit' className='btn btn-default'>Submit</button>
            </form>
        );
    }
}

/**
 * Connects the container to the store
 */
AddComment = connect()(AddComment);

export default AddComment;