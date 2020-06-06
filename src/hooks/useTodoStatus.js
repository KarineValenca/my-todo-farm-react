import { useEffect, useState } from 'react'
import api from '../api/api'

export default(props) => {
    const todoId = props._id
    const [isClicked, setIsClicked] = useState(false)
    const [todoStatus, setTodoStatus] = useState(props.isDone)
    const [errorMessage, setErrorMessage] = useState('')

    const changeTodoStatus = async() => {
        try{
            const response = await api.put(`/change-todo-status/${todoId}`)
            setTodoStatus(response.data.isDone)
            setIsClicked(false)
        }catch(err){
            setErrorMessage("Something went wrong, try again later")
        }
    }

    useEffect(() => {
        if(isClicked) {
            changeTodoStatus()
        }
    }, [isClicked])

    return [ changeTodoStatus, setIsClicked, todoStatus, errorMessage]
}