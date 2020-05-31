import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'

const LoginScreen = () => {
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

            <Button title="Log in" onPress={() => console.log("pressed login button")} />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
    }
})

export default LoginScreen