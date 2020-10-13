import React, { Component } from 'react'
import {
    Platform,
    ScrollView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'
import { Gravatar } from 'react-native-gravatar'

import commonStyles from '../commonStyles'

import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome'

export default props => {

    const logout = () => {
        delete axios.defaults.headers.common['Authorization']
        AsyncStorage.removeItem('userData')
        props.navigation.navigate('AuthOrApp')
    }


    return (
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.title}>Tasks</Text>
                <Gravatar style={styles.avatar} options={{
                    email: props.navigation.getParam('email'),
                    secure: true
                }} />
                <View style={styles.userInfo}>
                    <Text style={styles.name}>
                        {props.navigation.getParam('name')}
                    </Text>
                    <Text style={styles.email}>
                        {props.navigation.getParam('email')}
                    </Text>
                </View>
                <TouchableOpacity onPress={logout}>
                    <View style={styles.logoutIcon}>
                        <Icon name="sign-out" size={30} color='#800' />
                    </View>
                </TouchableOpacity>
            </View>
            <DrawerItems {...props} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        borderBottomWidth: 1,
        borderColor: '#DDD'
    },
    title: {
        fontSize: 30,
        padding: 10,
        paddingTop: Platform.OS === "ios" ? 50 : 30,
        fontFamily: commonStyles.fontFamily,
        color: '#000',
    },
    avatar: {
        width: 60,
        height: 60,
        borderWidth: 3,
        borderRadius: 30,
        margin: 10,
        backgroundColor: '#222',
    },
    userInfo: {
        marginLeft: 10
    },
    name: {
        fontSize: 20,
        marginBottom: 5,
        fontFamily: commonStyles.fontFamily,
    },
    email: {
        fontSize: 15,
        marginBottom: 10,
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.subText
    },
    logoutIcon: {
        marginLeft: 10,
        marginBottom: 10
    }
})