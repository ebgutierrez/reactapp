import React, { Component } from 'react';
import { connect } from 'react-redux';
import AlertContainer from 'react-alert';

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
            name      : '',
            comment   : '',
            alertOptions   : {
                offset     : 14,
                position   : 'bottom right',
                theme      : 'dark',
                time       : 5000,
                transition : 'scale'
              }
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
            this.msg.error('Fill empty fields');
            return;
        }

        this.props.dispatch( addComment( this.state.name.trim(), this.state.comment.trim() ) );

        this.setState({
            name    : '',
            comment : '' 
        });

        this.msg.success('Comment posted successfully!');
    } 

    render() {
        return (
            <form onSubmit = { this.handleSubmit }>
                <div className = 'form-group'>
                    <input  type        = 'text'
                            className   = 'form-control'
                            id          = 'name'
                            placeholder = '* Name'
                            name        = 'name'
                            value       = { this.state.name }
                            onChange    = { this.handleChange }
                            required/>
                </div>
                <div className = 'form-group'>
                    <textarea   className   = 'form-control'
                                id          = 'comment'
                                placeholder = '* Comment'
                                name        = 'comment'
                                value       = { this.state.comment }
                                onChange    = { this.handleChange }
                                required/>
                </div>
                <button type='submit' className='btn btn-default'>Submit</button>
                <AlertContainer ref={ alert => this.msg = alert } { ... this.state.alertOptions }/>
            </form>
        );
    }
}

/**
 * Connects the container to the store
 */
AddComment = connect()(AddComment);

export default AddComment;