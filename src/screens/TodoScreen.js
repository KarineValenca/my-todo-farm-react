import React, { useContext, useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import ListTodoItem from '../components/ListTodoItem'
import ColapseSection from '../components/ColapseSection'
import { Context as TodoContext } from '../context/TodoContext'
import { Context as AuthContext } from '../context/AuthContext'
import CustomHeader from '../components/CustomHeader'
import CustomToast from '../components/CustomToast'

const TodoScreen = ({ navigation }) => {
    const { state } = useContext(AuthContext)
    const [isToastVisible, setIsToastVisible] = useState(false)
    const { state: { todos, todo }, showTodos } = useContext(TodoContext)

    const showToast = () => {
        return (
            <CustomToast text={'You won a seed!'} gravity={50}/>
        )
    }

    useEffect(() => {
        showTodos(state.user._id)
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
            <ColapseSection title={"TO-DO"}>
                <FlatList 
                    data={todos}
                    renderItem={ ({item}) => {
                        if (item.isDone == false) {
                            return(
                                <ListTodoItem 
                                    todo={item} 
                                />
                            )
                        }
                    }}
                    keyExtractor={todo => todo._id}
                />
            </ColapseSection>
            <ColapseSection title={"DONE"}>
                <FlatList 
                    data={todos}
                    renderItem={ ({item}) => {
                        if (item.isDone == true) {
                            return(
                                <ListTodoItem 
                                    todo={item} 
                                />
                            )
                        }
                    }}
                    keyExtractor={todo => todo._id}
                />
            </ColapseSection>
        </View>
    )
}


TodoScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}

export default TodoScreen