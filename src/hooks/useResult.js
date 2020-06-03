import { useEffect, useState } from 'react'
import api from '../api/api'

export default() => {
    const [todos, setTodos] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const showUserTodos = async() => {
        try{
            const response = await api.get('/todos')
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