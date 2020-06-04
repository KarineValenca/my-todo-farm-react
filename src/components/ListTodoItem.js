import React from 'react'
import { ListItem, CheckBox } from 'react-native-elements'

const ListTodoItem = ({ todo }) => {
    return (
        <ListItem
            title={todo.title}
            bottomDivider
            checkBox
            disabled={todo.isDone}
        />
    )
}

export default ListTodoItem