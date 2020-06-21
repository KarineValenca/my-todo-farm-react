import React, { useContext, useEffect } from 'react'
import { View, FlatList } from 'react-native'
import ListTodoItem from '../components/ListTodoItem'
import { Context as TodoContext } from '../context/TodoContext'
import { Context as AuthContext } from '../context/AuthContext'
import CustomHeader from '../components/CustomHeader'
import { navigate } from '../navigateRef'

const TodoScreen = ({ navigation }) => {
    const { state } = useContext(AuthContext)
    const userId = state.user._id

    const { state: { todos, todo }, showTodos } = useContext(TodoContext)
    
    useEffect(() => {
        showTodos(userId)
    }, [todo])

    
    return(
        <View style={{ flex: 1 }}>
            <CustomHeader 
                title={"My To-Do List"} 
                rightIcon={"plus"} 
                rightOnClick={() => navigation.navigate('TodoCreate')}
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