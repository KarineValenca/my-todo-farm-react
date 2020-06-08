import React, { useState, useContext } from 'react'
import { View, Text } from 'react-native'
import { Header, Input, Button } from 'react-native-elements'
import ButtonHeader from '../components/ButtonHeader'

import useCreateTodo from '../hooks/useCreateTodo'
import { Context as TodoContext} from '../context/TodoContext'
import { Context as AuthContext } from '../context/AuthContext'
const CreateTodoScreen = ({ navigation }) => {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    //const [createTodo, todo, errorMessage] = useCreateTodo(title, category)
    const { state } = useContext(AuthContext)
    
    const userId = state.user._id
    const { state: {todos}, createTodo } = useContext(TodoContext)

    return(
        <View>
            <Header 
                centerComponent={{ 
                    text: 'Create New To-Do', 
                    style: { 
                        color: '#fff',
                        fontSize: 24,
                        fontWeight: 'bold'
                    } 
                }}
                leftComponent={
                    <ButtonHeader 
                        icon="arrow-left" 
                        size={20} 
                        onClick={() => navigation.navigate('Todo')}
                    />
                    
                }
            />
            <Input 
                label="Title"
                placeholder="To-Do Title"
                onChangeText={setTitle}
            />
            <Input 
                label="Category"
                placeholder="Category"
                onChangeText={setCategory}
            />

            <Button 
                title="CREATE"
                onPress={ () => createTodo(userId ,title, category)}
            />

        </View>
    )
}

CreateTodoScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}

export default CreateTodoScreen