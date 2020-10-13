import React, { Component } from 'react'
import {
    Platform,
    ScrollView,
    View,
    Text,
    StyleSheet
} from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'
import { Gravatar } from 'react-native-gravatar'

import commonStyles from '../commonStyles'

export default props => {
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
    }
})