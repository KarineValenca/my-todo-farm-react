import React from 'react'
import useResults from '../hooks/useResult'
import { View, FlatList } from 'react-native'
import { Text, Header, ListItem } from 'react-native-elements'
import ListTodoItem from '../components/ListTodoItem'

const TodoScreen = () => {
    const [showUserTodos, todos, errorMessage] = useResults()
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
            
            <FlatList 
                data={todos}
                keyExtractor={todo => todos._id}
                renderItem={ ({item}) => {
                    return(
                        <ListTodoItem todo={item} />
                    ) 
                }}
            />
        </View>
    )
}


TodoScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}

export default TodoScreen