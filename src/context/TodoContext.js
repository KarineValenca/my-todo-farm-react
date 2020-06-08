import createDataContext from './createDataContext'
import api from '../api/api'
import { navigate } from '../navigateRef'

const todoReducer = (state, action) => {
    switch(action.type){
        case 'show_todos': 
            console.log("show todo")
            return { todos: action.payload, errorMessage: ''}
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        default:
            return state

    }
}

const showTodos = (dispatch) => async(userId) => {
    console.log("called show todos")
    try{
        const response = await api.get(`/todos/${userId}`)
       // console.log(response)
        dispatch({ type: 'show_todos', payload: response.data})
    }catch(err){
        dispatch({
            type: 'add_error',
            payload: 'Could not load To-Do list, try again later.'
        })
    }
}

export const { Provider, Context } = createDataContext(
    todoReducer,
    { showTodos },
    { todos: [], errorMessage: ''}
)