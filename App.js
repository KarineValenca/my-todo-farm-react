import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'
import LoginScreen from './src/screens/LoginScreen'
import TodoScreen from './src/screens/TodoScreen'
import TodoCreateScreen from './src/screens/CreateTodoScreen'
import { Provider as AuthProvider } from './src/context/AuthContext'
import { Provider as TodoProvider } from './src/context/TodoContext'
import { setNavigator } from './src/navigateRef'

const App = () => {
  const switchNavigator = createSwitchNavigator(
    {
      loginFlow: createStackNavigator({
        Login: LoginScreen,
      }),
      mainFlow: createStackNavigator({
        Todo: TodoScreen,
        TodoCreate: TodoCreateScreen,
      })
    }, {
      initialRouteName: 'loginFlow'
    }
  )
  const App = createAppContainer(switchNavigator)
  return(
    
      <AuthProvider>
        <TodoProvider>
        <App ref={ (navigator) => { setNavigator(navigator) }} />
        </TodoProvider>
      </AuthProvider>
    
  )
}

export default App