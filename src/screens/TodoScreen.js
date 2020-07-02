import React, { useContext, useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import ListTodoItem from '../components/ListTodoItem'
import { Context as TodoContext } from '../context/TodoContext'
import { Context as AuthContext } from '../context/AuthContext'
import CustomHeader from '../components/CustomHeader'
import CustomToast from '../components/CustomToast'

const TodoScreen = ({ navigation }) => {
    const { state } = useContext(AuthContext)
    const userId = state.user._id
    const [isToastVisible, setIsToastVisible] = useState(false)

    const { state: { todos, todo }, showTodos } = useContext(TodoContext)

    const showToast = () => {
        return (
            <CustomToast text={'You won a seed!'} gravity={50}/>
        )
    }

    useEffect(() => {
        showTodos(userId)
        if(todo != undefined && todo.isDone === true) {
            setIsToastVisible(true)
        }
    }, [todo])

    
    return(
        <View style={{ flex: 1 }}>
            
            <CustomHeader 
                title={"My To-Do List"} 
                rightIcon={"plus"} 
                rightOnClick={() => navigation.navigate('TodoCreate')}
            />
            {isToastVisible ? showToast() : null }
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