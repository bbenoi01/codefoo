import React, { Component } from 'react';
import { NavigationEvents } from 'react-navigation';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import {
    Card,
    Divider,
    Text
} from 'react-native-elements';
import {
    getComments,
    detailsTrue,
    detailsFalse,
    toggleContentType
} from '../actions';
import { types } from '../../types';

export default class CommentsScreen extends Component {

    addBackButton = () => {
        const { dispatch, navigation } = this.props;
        const content = navigation.getParam('item');
        dispatch(detailsTrue());
        dispatch(getComments(content.contentId));
        dispatch(toggleContentType('comment'));
    }

    // removeBackButton = () => {
    //     const { dispatch } = this.props;
    //     dispatch(detailsFalse())
    // }

    // handleGetComments = () => {
    //     const { dispatch, navigation } = this.props;
    //     const content = navigation.getParam('item');
    //     const contentId = content.contentId;
    //     dispatch(getComments(contentId));
    // }

    handleClearComments = () => {
        const { dispatch } = this.props;
        dispatch({ type: types.CLEAR_COMMENTS});
        dispatch(detailsFalse());
    }

    render() {
        const { navigation, comments } = this.props;
        const content = navigation.getParam('item');
        console.log('comments screen', comments)

        return (
            <View style={styles.container}>
                <NavigationEvents
                    onWillFocus={this.addBackButton}
                    onWillBlur={this.handleClearComments}
                />
                {content ? (
                    <Text >ContentId: {content.contentId}</Text>
                ) : null}
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    divider: {
        backgroundColor: '#bdbdbd',
        margin: 10,
        height: 1
    },
    card: {
        paddingHorizontal: 25
    },
    subTitleText: {
        fontSize: 13,
        color: '#9e9e9e',
        marginBottom: 15
    },
    actionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    actionText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#bdbdbd'
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    infoText: {
        fontSize: 9,
        color: '#bdbdbd',
        paddingTop: 10
    }
})