import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'

export default props => {
    return (
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    )
}