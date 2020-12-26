import React, { Component, Fragment } from 'react';
import { NavigationEvents } from 'react-navigation';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import {
    Card,
    Divider,
    Text
} from 'react-native-elements';

import {
    getVideos
} from '../actions';
import { types } from '../../types';

export default class VideoScreen extends Component {

    handleGetVideos = () => {
        const { dispatch } = this.props;
        dispatch(getVideos())
    }

    handleClearVideos = () => {
        const { dispatch } = this.props;
        dispatch({ type: types.CLEAR_VIDEOS })
    }

    render() {
        const { videos, navigation } = this.props;

        return (
            <View style={styles.container}>
                <NavigationEvents
                    onWillFocus={this.handleGetVideos}
                    onWillBlur={this.handleClearVideos}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>Swipe Between Sections</Text>
                </View>
                <Divider style={styles.divider} />
                <FlatList
                    data={videos}
                    keyExtractor={item => item.contentId}
                    renderItem={({ item }) => {
                        return (
                            <Fragment>
                                <View style={styles.card}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('VideoDetail', { item })}
                                    >
                                        <Card.Title style={{ fontSize: 20 }}>{item.metadata.title}</Card.Title>
                                        <Card.Image
                                            source={{ uri: item.thumbnails[1].url }}
                                            resizeMode='cover'
                                        />
                                        <Card.FeaturedSubtitle style={styles.subTitleText}>{item.metadata.description}</Card.FeaturedSubtitle>
                                    </TouchableOpacity>
                                    <View style={styles.actionContainer}>
                                        <TouchableOpacity
                                            onPress={() => navigation.navigate('VideoDetail', { item })}
                                        >
                                            <Text style={styles.actionText}>Watch</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Text style={styles.actionText}>Comment</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <Divider style={styles.divider} />
                            </Fragment>
                        )
                    }}
                />
            </View>
        );
    }
}

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