import React from 'react'
import { ListItem, CheckBox } from 'react-native-elements'
import { View, Text } from 'react-native'

const ListTodoItem = ({ todo }) => {
    return (
        <ListItem
            title={todo.title}
            bottomDivider
            disabled={todo.isDone}
            checkBox={{ 
                checked: false,
                onPress: () => {console.log("teste")}
            }}
        />
    )
}

export default ListTodoItem