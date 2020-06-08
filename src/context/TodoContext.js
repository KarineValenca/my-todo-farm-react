import createDataContext from './createDataContext'
import api from '../api/api'
import { navigate } from '../navigateRef'

const todoReducer = (state, action) => {
    switch(action.type){
        case 'show_todos': 
            return { todos: action.payload, errorMessage: ''}
        case 'create_todo':
            return { todos: action.payload, errorMessage: ''}
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        default:
            return state

    }
}

const showTodos = (dispatch) => async(userId) => {
    try{
        const response = await api.get(`/todos/${userId}`)
        dispatch({ type: 'show_todos', payload: response.data})
    }catch(err){
        dispatch({
            type: 'add_error',
            payload: 'Could not load To-Do list, try again later.'
        })
    }
}

const createTodo = (dispatch) => async(userId, title, category) => {
    try {
        const response = await api.post(`/todos/${userId}`, { title, category })
        dispatch({ type: 'create_todo', payload: response.data })
        navigate('Todo')
    }catch(err) {
        dispatch({
            type: 'add_error',
            payload: 'Could not create todo, try again later.'
        })
    }
}

export const { Provider, Context } = createDataContext(
    todoReducer,
    { showTodos, createTodo },
    { todos: [], errorMessage: ''}
)