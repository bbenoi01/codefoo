import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import {
    Header
} from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

export default class AppHeader extends Component {
    render() {
        const { navigation, backButton, contentType } = this.props;
        let route;
        if (contentType === 'article') {
            route = 'Article'
        } else if (contentType === 'video') {
            route = 'Video'
        } else if (contentType === 'comment') {
            route = 'Comments'
        }
        
        return (
            <Header
                leftComponent={backButton === true && contentType === 'comment' ? (
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <AntDesign name='back' color='#f5f5f5' size={25}/>
                    </TouchableOpacity>
                ) : backButton === true ? (
                    <TouchableOpacity
                        onPress={() => navigation.navigate(route)}
                    >
                        <AntDesign name='back' color='#f5f5f5' size={25}/>
                    </TouchableOpacity>
                ) : null}
                centerComponent={{ text: 'IGN', style: { color: '#f5f5f5', fontWeight: 'bold' } }}
                containerStyle={{ backgroundColor: 'red' }}
            />
        );
    }
}