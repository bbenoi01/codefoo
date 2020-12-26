import { connect } from 'react-redux';
import ArticlesScreen from './ArticlesScreen';

function mapStoreToProps(store) {
    return {
        articles: store.app.articles,
        comments: store.app.comments
    }
}

export default connect(mapStoreToProps)(ArticlesScreen);