import { connect } from 'react-redux';

/*import component*/
import Comments from './../components/Comments';

/**
 * Get the list of comments
 * @param  {array} comments A JSON Array containing the list of comments
 * @return {array}          Returns a reversed JSON Array of comments
 */
const getComments =  comments  => {
    return comments.reverse();
};

const mapStateToProps = state  => {
    return {
        comments : getComments( state.comments )
    }
}

const ViewComments = connect( mapStateToProps )( Comments );

export default ViewComments;