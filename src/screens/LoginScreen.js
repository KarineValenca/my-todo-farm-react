import React, { useState, useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { Context } from '../context/AuthContext'

const LoginScreen = () => {
    const { state, signin } = useContext(Context)
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
            <Button title="Log in" onPress={() => signin({ email, password })} />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
    }
})

export default LoginScreen