import React, { useState, useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Text, Button } from 'react-native-elements'
import CustomHeader from '../components/CustomHeader'
import { navigate } from '../navigateRef'
import { Context as AuthContext } from '../context/AuthContext'

const SignUpScreen = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {state, signup} = useContext(AuthContext)
    console.log(email)
    return (
        <View>
        <CustomHeader 
                title={"Sign Up"} 
                leftIcon={"arrow-left"} 
                leftOnClick={() => navigate('Login')}
        />
       
        <Input 
            label="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
        />

        <Input 
            label="Username"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            autoCorrect={false}
        />

        <Input 
            label="Password"
            value={password}
            secureTextEntry
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
        />
        {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null }
        <Button title="Sign Up" onPress={() => signup({ email, username, password })} />
        </View>
    )
}

const styles = StyleSheet.create({
    errorMessage: {
        textAlign: 'center',
        fontSize: 16,
        color: 'red',
        paddingBottom: 15,
    },

})

SignUpScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}

export default SignUpScreen