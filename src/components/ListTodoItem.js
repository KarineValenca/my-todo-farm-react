import React from 'react'
import { ListItem } from 'react-native-elements'

const ListTodoItem = ({ todo }) => {
    return (
        <ListItem
            title={todo}
            bottomDivider
            chevron={{ color: 'red' }}
        />
    )
}

export default ListTodoItem