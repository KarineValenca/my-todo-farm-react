import React from 'react'
import { ListItem } from 'react-native-elements'
import useTodoStatus from '../hooks/useTodoStatus'

const ListTodoItem = ({ todo }) => {
    const [ changeTodoStatus, setIsClicked, todoStatus ] = useTodoStatus(todo)

    return (
        <ListItem
            title={todo.title}
            bottomDivider
            disabled={false}
            disabledStyle={{title: {color: 'grey'}}}
            checkBox={{ 
                checked: todoStatus,
                onPress: () => {setIsClicked(true)}
            }}
        />
    )
}

export default ListTodoItem