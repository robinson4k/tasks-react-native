import React, { Component } from 'react'
import {
    Platform,
    ScrollView,
    View,
    Text,
    StyleSheet,
    ActivityIndicator
} from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'
import { Gravatar } from 'react-native-gravatar'

import commonStyles from '../commonStyles'

export default class AuthOrApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size='large' />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#000'
    }
})