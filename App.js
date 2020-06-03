import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'
import LoginScreen from './src/screens/LoginScreen'
import TodoScreen from './src/screens/TodoScreen'
import { Provider as AuthProvider } from './src/context/AuthContext'
import { setNavigator } from './src/navigateRef'

const App = () => {
  const switchNavigator = createSwitchNavigator(
    {
      loginFlow: createStackNavigator({
        Login: LoginScreen,
      }),
      mainFlow: createStackNavigator({
        Todo: TodoScreen,
      })
    }, {
      initialRouteName: 'loginFlow'
    }
  )
  const App = createAppContainer(switchNavigator)
  return(
    <AuthProvider>
      <App ref={ (navigator) => { setNavigator(navigator) }} />
    </AuthProvider>
  )
}

export default App