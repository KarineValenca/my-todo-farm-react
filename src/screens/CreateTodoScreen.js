import React, { useState, useContext, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Text, Button, ButtonGroup } from 'react-native-elements'
import CustomHeader from '../components/CustomHeader'
import Spacer from '../components/Spacer'
import { Context as TodoContext} from '../context/TodoContext'
import { Context as AuthContext } from '../context/AuthContext'

const CreateTodoScreen = ({ navigation }) => {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [selectedIndex, setSelectedIndex] = useState('')
    const { state } = useContext(AuthContext)
    
    const userId = state.user._id
    const { state: { errorMessage }, createTodo } = useContext(TodoContext)
    const options = ['Study', 'Fit', 'Work', 'Hobby']

    const selectCategory = () => {
        switch (selectedIndex) {
            case 0:
                setCategory('Study')
                break
            case 1:
                setCategory('Fit')
                break
            case 2:
                setCategory('Work')
                break
            case 3:
                setCategory('Hobby')
                break
            default:
                break;
        }
    }

    useEffect( () => {
        selectCategory()
    }, [selectedIndex])

    return(
        <View>
            <CustomHeader 
                title={"Create New To-Do"} 
                leftIcon={"arrow-left"} 
                leftOnClick={() => navigation.navigate('Todo')}
            />
            <Input 
                label="Title"
                placeholder="To-Do Title"
                onChangeText={setTitle}
            />
            <Text style={styles.textStyle}>Category</Text>
            <ButtonGroup 
                onPress={setSelectedIndex}
                selectedIndex={selectedIndex}
                buttons={options}
                containerStyle={{ height: 35, color: '#5458CC' }}
                selectedButtonStyle= {styles.selectButtonStyle}
                selectedTextStyle={{ color: '#5458CC'}}
                
            />
            { errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null }
            <Spacer>
                <Button 
                    title="CREATE"
                    onPress={ () => createTodo(userId ,title, category)}
                    buttonStyle={{ backgroundColor: '#5458CC'}}
                />
            </Spacer>
        </View>
    )
}

const styles = StyleSheet.create({
    errorMessage: {
        textAlign: 'center',
        fontSize: 16,
        color: 'red',
        paddingBottom: 15,
    },
    textStyle: {
        color: 'grey', 
        fontSize: 16, 
        fontWeight: 'bold', 
        margin: 10
    },
    selectButtonStyle: {
        backgroundColor: 'white', 
        borderWidth: 2, 
        borderColor: '#5458CC', 
        borderRadius: 1,
    }

})

CreateTodoScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}

export default CreateTodoScreen