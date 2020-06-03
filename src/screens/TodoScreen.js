import React from 'react'
import useResults from '../hooks/useResult'
import { View } from 'react-native'
import { Text, Header } from 'react-native-elements'

const TodoScreen = () => {
    const [showUserTodos, todos, errorMessage] = useResults()
    console.log(todos)
    return(
        <View>
            <Header 
                centerComponent={{ 
                    text: 'My To-Do List', 
                    style: { 
                        color: '#fff',
                        fontSize: 24,
                        fontWeight: 'bold'
                    } 
                }}
                containerStyle={{
                    justifyContent: 'space-around',
                }}
                statusBarProps={{
                    translucent: true,
                }}
                
            />
            <Text> My To-Do List</Text>
        </View>
    )
}


TodoScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}

export default TodoScreen