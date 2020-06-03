import createDataContext from './createDataContext'
import api from '../api/api'
import { navigate } from '../navigateRef'

const authReducer = (state, action) => {
    switch(action.type) {
        case 'signin':
            return { errorMessage: '', token: action.payload.token, user: action.payload.user}
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

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin },
    { user: null, user: null, errorMessage: ''}
)