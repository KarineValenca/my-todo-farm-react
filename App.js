import React from 'react'
import { View, Text } from 'react-native'
import HomeScreen from './src/screens/HomeScreen'
import LoginScreen from './src/screens/LoginScreen'
import { Provider as AuthProvider } from './src/context/AuthContext'

const App = () => {
  return(
    <AuthProvider>
      <LoginScreen />
    </AuthProvider>
  )
}

export default App