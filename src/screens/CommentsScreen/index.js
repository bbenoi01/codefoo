import { connect } from 'react-redux';
import CommentsScreen from './CommentsScreen';

function mapStoreToProps(store) {
    return {
        comments: store.app.comments
    }
}

export default connect(mapStoreToProps)(CommentsScreen);