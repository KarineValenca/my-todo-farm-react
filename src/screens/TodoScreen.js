import React, { useContext, useEffect } from 'react'
import { View, FlatList } from 'react-native'
import { Header } from 'react-native-elements'
import ListTodoItem from '../components/ListTodoItem'
import ButtonHeader from '../components/ButtonHeader'
import { Context as TodoContext } from '../context/TodoContext'
import { Context as AuthContext } from '../context/AuthContext'

const TodoScreen = ({ navigation }) => {
    const { state } = useContext(AuthContext)
    
    const userId = state.user._id
    const { state: { todos, todo }, showTodos } = useContext(TodoContext)
    
    
    useEffect(() => {
        showTodos(userId)
    }, [todo])

    
    return(
        <View style={{ flex: 1 }}>
            <Header 
                centerComponent={{ 
                    text: 'My To-Do List', 
                    style: { 
                        color: '#fff',
                        fontSize: 24,
                        fontWeight: 'bold'
                    } 
                }}
                rightComponent={
                    <ButtonHeader 
                        icon="plus" 
                        size={20} 
                        onClick={() => navigation.navigate('TodoCreate')}
                    />
                    
                }
                containerStyle={{
                    justifyContent: 'space-around',
                }}
                statusBarProps={{
                    translucent: true,
                }}
                
            />
            
            <FlatList 
                data={todos}
                renderItem={ ({item}) => {
                    return(
                        <ListTodoItem 
                            todo={item} 
                        />
                    ) 
                }}
                keyExtractor={todo => todo._id}
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