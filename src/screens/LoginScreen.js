import React, { useState, useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { Context } from '../context/AuthContext'

const LoginScreen = () => {
    const { state, signin } = useContext(Context)
    console.log(state.errorMessage)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return(
        <View>
            <Text h2 style={styles.textStyle}>Log In</Text>
            <Input 
                label="Email"
                value={email}
                onChangeText={setEmail}
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
            {console.log(state.errorMessage)}
            {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null }
            <Button title="Log in" onPress={() => signin({ email, password })} />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
    },
    errorMessage: {
        textAlign: 'center',
        fontSize: 16,
        color: 'red',
        paddingBottom: 15,
    },

})

export default LoginScreen