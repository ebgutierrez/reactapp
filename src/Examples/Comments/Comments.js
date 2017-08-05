import React, { Component } from 'react';

/*import components/containers*/
import AddComment from './container/AddComment';

class Comments extends Component {
    render() {
        return (
            <div className = "panel panel-default">
                <div className = "panel-heading">
                    <h3 className = "panel-title">Comments</h3>
                </div>
                <div className = "panel-body">
                    <AddComment />
                </div>
            </div>
        );
    }
}

export default Comments;