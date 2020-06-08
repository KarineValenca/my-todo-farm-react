import { useState, useContext } from 'react'
import api from '../api/api'
import { Context } from '../context/AuthContext'
import { navigate } from '../navigateRef'

export default() => {
    const { state } = useContext(Context)
    const [errorMessage, setErrorMessage] = useState('')
    const [todo, setTodo] = useState({})

    const userId = state.user._id
    const createTodo = async(title, category) => {
        try {
            const response = await api.post(`/todos/${userId}`, { title, category })
            console.log(response.data)
            setTodo(response.data)
            navigate('Todo')
        }catch(err) {
            console.log(err)
            setErrorMessage(err)
        }
    }

    return [ createTodo, todo, errorMessage ]
}