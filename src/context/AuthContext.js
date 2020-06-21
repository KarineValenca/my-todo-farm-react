import createDataContext from './createDataContext'
import api from '../api/api'
import { navigate } from '../navigateRef'

const authReducer = (state, action) => {
    switch(action.type) {
        case 'signin':
            return { errorMessage: '', token: action.payload.token, user: action.payload.user }
        case 'signup':
            return { errorMessage: '', token: action.payload.token, user: action.payload.user }
        case 'logout':
            return { errorMessage: '', token: null, user: null }
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        default:
            return state
    }
}

const signin = (dispatch) => async({ email, password }) => {
    try {
        const response = await api.post('/signin', { email, password })
        dispatch({ type: 'signin', payload: response.data})
        navigate('Todo')
    } catch(err) {
        dispatch({
            type: 'add_error',
            payload: 'Wrong email or password'
        })
    }
}

const signup = (dispatch) => async({ email, username, password}) => {
    try{
        const responde = await api.post('/signup', { email, password, username })
        dispatch({ type: 'signup', payload: responde.data })
        navigate('Todo')
    }catch(err) {
        dispatch({
            type: 'add_error',
            payload: 'Invalid data'
        })
    }
}

const logout = (dispatch) => () => {
    dispatch({ type: 'logout' })
    navigate('Login')
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signup, logout },
    { token: null, user: null, errorMessage: ''}
)