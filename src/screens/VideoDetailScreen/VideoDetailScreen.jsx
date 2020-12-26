import React, { Component, Fragment } from 'react';
import { NavigationEvents } from 'react-navigation';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

import {
    detailsTrue,
    detailsFalse,
    toggleContentType
} from '../actions';

export default class VideoDetailScreen extends Component {

    addBackButton = () => {
        const { dispatch } = this.props;
        dispatch(toggleContentType('video'));
        dispatch(detailsTrue());
    }

    removeBackButton = () => {
        const { dispatch } = this.props;
        dispatch(detailsFalse())
    }

    render() {
        const { navigation } = this.props;
        const content = navigation.getParam('item');

        return (
            <View style={styles.container}>
                <NavigationEvents
                    onWillFocus={this.addBackButton}
                    onWillBlur={this.removeBackButton}
                />
                {content ? (
                    <Fragment>
                        <WebView
                            source={{ uri: `https://www.ign.com/videos/${content.metadata.slug}` }}
                        />
                    </Fragment>
                ) : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1
    }
})