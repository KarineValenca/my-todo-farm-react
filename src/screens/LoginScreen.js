import React, { useState, useContext, useEffect } from 'react'
import { NavigationEvents } from 'react-navigation'
import { View, StyleSheet } from 'react-native'
import Spacer from '../components/Spacer'
import { Text, Input, Button } from 'react-native-elements'
import { Context } from '../context/AuthContext'
import { navigate } from '../navigateRef'

const LoginScreen = () => {
    const { state, signin, tryLocalSignin, clearErrorMessage } = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        tryLocalSignin()
    }, [])
    
    return(
        <View>
            <NavigationEvents onWillFocus={clearErrorMessage} />
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
            <Spacer>
                <Button 
                    title="Log in" 
                    onPress={() => signin({ email, password })} 
                    buttonStyle={styles.loginButtonStyle}/>
            
                <Button 
                    title="Sign Up" 
                    titleStyle={{ color: '#5458CC'}} 
                    buttonStyle={ styles.signupButtonStyle } 
                    type="outline" 
                    onPress={() => navigate('SignUp')} />
            </Spacer>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        color: '#5458CC'
    },
    errorMessage: {
        textAlign: 'center',
        fontSize: 16,
        color: 'red',
        paddingBottom: 15,
    },
    loginButtonStyle: {
        backgroundColor: '#5458CC'
    },
    signupButtonStyle: {
        marginTop: 5,
        borderWidth: 1,
        borderColor: '#5458CC'
    }

})

LoginScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}

export default LoginScreen