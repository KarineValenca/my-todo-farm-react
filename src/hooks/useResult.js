import { useEffect, useState, useContext } from 'react'
import api from '../api/api'
import { Context } from '../context/AuthContext'

export default() => {
    const { state } = useContext(Context)
    const [todos, setTodos] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const userId = state.user._id
    
    const showUserTodos = async() => {
        try{
            const response = await api.get(`/todos/${userId}`)
            console.log(response)
            setTodos(response.data)
        } catch(err) {
            setErrorMessage("Something went wrong, try again later")
        }
    }

    useEffect(() => {
        showUserTodos()
    }, [])

    return [showUserTodos, todos, errorMessage]
}