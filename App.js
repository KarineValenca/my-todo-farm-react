import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import HomeScreen from './src/screens/HomeScreen'
import LoginScreen from './src/screens/LoginScreen'
import SignUpScreen from './src/screens/SignUpScreen'
import TodoScreen from './src/screens/TodoScreen'
import TodoCreateScreen from './src/screens/CreateTodoScreen'
import FarmScreen from './src/screens/FarmScreen'
import PlantCreateScreen from './src/screens/CreatePlantScreen'
import SideMenu from'./src/navigation/SideMenu'
import { Provider as AuthProvider } from './src/context/AuthContext'
import { Provider as TodoProvider } from './src/context/TodoContext'
import { setNavigator } from './src/navigateRef'
import Icon from 'react-native-vector-icons/FontAwesome5'

const todoFlow = createSwitchNavigator({
  Todo: TodoScreen,
  TodoCreate: TodoCreateScreen,
})
todoFlow.navigationOptions = {
  title: 'My To-Dos',
  tabBarIcon: <Icon name='list' size={20} color='green'/>
}

const farmFlow = createSwitchNavigator({
  Farm: FarmScreen,
  PlantCreate: PlantCreateScreen
})
farmFlow.navigationOptions = {
  title: 'My Farm',
  tabBarIcon: <Icon name='seedling' size={20} color='green'/>
}

const menuNav = createSwitchNavigator({
  SideMenu: SideMenu
})
menuNav.navigationOptions = {
  title: 'Menu',
  tabBarIcon: <Icon name='bars' size={20} color='green' />
}

const App = () => {
  const switchNavigator = createSwitchNavigator(
    {
      loginFlow: createStackNavigator({
        Login: LoginScreen,
        SignUp: SignUpScreen,
      }),
      mainFlow: createBottomTabNavigator({
        todoFlow,
        farmFlow,
        menuNav
      }),
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