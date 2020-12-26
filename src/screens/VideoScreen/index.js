import { connect } from 'react-redux';
import VideoScreen from './VideoScreen';

function mapStoreToProps(store) {
    return {
        videos: store.app.videos
    }
}

export default connect(mapStoreToProps)(VideoScreen);