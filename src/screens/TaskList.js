import React, { Component } from 'react'
import { ImageBackground, Text, View, StyleSheet } from 'react-native'

import commonStyles from '../commonStyles'
import todayImage from '../../assets/imgs/today.jpg'
import moment from 'moment'
import 'moment/locale/pt-br'

import Task from '../components/Task'

export default class TaskList extends Component {
    render() {
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
        return (
            <View style={styles.container}>
                <ImageBackground source={todayImage} style={styles.background}>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <Task desc="Tarefa 1" estimateAt={new Date()} doneAt={new Date()} />
                    <Task desc="Tarefa 2" estimateAt={new Date()} doneAt={null} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    taskList: {
        flex: 7
    },
    titleBar: {
        flex: 1,
        justifyContent: "flex-end"
    },
    title: {
        fontSize: 50,
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        marginLeft: 20,
    },
    subtitle: {
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 20,
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
    }
})