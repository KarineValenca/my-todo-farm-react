import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Text, Button } from 'react-native-elements'
import CustomHeader from '../components/CustomHeader'
import { navigate } from '../navigateRef'

const SignUpScreen = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

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
        
        <Button title="Sign Up" onPress={() => console.log("teste")} />
        </View>
    )
}

SignUpScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}

export default SignUpScreen