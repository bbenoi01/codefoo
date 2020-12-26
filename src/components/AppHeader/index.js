import { connect } from 'react-redux';
import AppHeader from './AppHeader';

function mapStoreToProps(store) {
    return {
        backButton: store.app.details,
        contentType: store.app.contentType
    }
}

export default connect(mapStoreToProps)(AppHeader);