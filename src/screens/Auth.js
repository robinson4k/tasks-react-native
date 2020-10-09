import React, { Component } from 'react'
import {
    Alert,
    Text,
    View,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
} from 'react-native'

import backgroundImage from '../../assets/imgs/login.jpg'
import commonStyles from '../commonStyles'
import AuthInput from '../components/AuthInput'

export default class Auth extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        stageNew: false
    }

    signinOrSignup = () => {
        if (this.state.stageNew) {
            Alert.alert('Sucesso', 'Criar conta')
        } else {
            Alert.alert('Sucesso', 'Logar')
        }
    }

    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.background}>
                <Text style={styles.title}>Tasks</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.subtitle}>
                        { this.state.stageNew ? 'Crie a sua conta' : 'Informe seus dados' }
                    </Text>
                    {this.state.stageNew &&
                        <AuthInput icon='user' style={styles.input} placeholder='Nome' onChangeText={name => this.setState({ name })} />

                    }
                    <AuthInput icon='at' style={styles.input} placeholder='E-mail' onChangeText={email => this.setState({ email })} />
                    <AuthInput icon='lock' style={styles.input} placeholder='Senha' onChangeText={password => this.setState({ password })} secureTextEntry={true} />
                    {this.state.stageNew &&
                        <AuthInput icon='asterisk' style={styles.input} placeholder='Confirmação de senha' onChangeText={confirmPassword => this.setState({ confirmPassword })} secureTextEntry={true} />
                    }
                    <TouchableOpacity onPress={this.signinOrSignup}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                { this.state.stageNew ? 'Registrar' : 'Entrar' }
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ padding: 10 }} onPress={() => this.setState({ stageNew: !this.state.stageNew })}>
                    <Text style={styles.buttonText}>{ this.state.stageNew ? 'Já possui conta?' : 'Ainda não possui conta?' }</Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 50,
        marginBottom: 10,
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
    },
    subtitle: {
        fontSize: 20,
        marginBottom: 8,
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        textAlign: "center",
    },
    input: {
        fontSize: 16,
        marginTop: 10,
        backgroundColor: '#FFF',
    },
    formContainer: {
        width: '90%',
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: "center",
        borderRadius: 5
    },
    buttonText: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 20
    }
})