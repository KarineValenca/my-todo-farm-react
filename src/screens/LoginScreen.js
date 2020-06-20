import React, { useState, useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { Context } from '../context/AuthContext'
import { navigate } from '../navigateRef'

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
            {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null }
            <Button title="Log in" onPress={() => signin({ email, password })} />
            <Button title="SignUp" buttonStyle={{ marginTop: 10 }} type="outline" onPress={() => navigate('SignUp')} />
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

LoginScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}

export default LoginScreen