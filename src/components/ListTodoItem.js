import React from 'react'
import { ListItem } from 'react-native-elements'
import useTodoStatus from '../hooks/useTodoStatus'

const ListTodoItem = ({ todo }) => {
    const [ changeTodoStatus, styles, checkboxProps ] = useTodoStatus(todo)    
    return (
        <ListItem
            title={todo.title}
            titleStyle={styles}
            bottomDivider
            checkBox={
                checkboxProps
            }
        />
    )
}

export default ListTodoItem