import createDataContext from './createDataContext'
import api from '../api/api'
import { navigate, clearNav } from '../navigateRef'
import { AsyncStorage } from 'react-native'

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

const tryLocalSignin = dispatch => async() => {
    const payload = {
        token: "",
        user: {},
    }
    payload.token = await AsyncStorage.getItem('token')
    payload.user = JSON.parse(await AsyncStorage.getItem('user'))

    try {
        if (payload.token && payload.user) {
            dispatch({ type: 'signin', payload: payload })
            navigate('Todo')
        }else{
            navigate('Login')
        }
    }catch(err){
        console.log(err)
    }
}
const signin = (dispatch) => async({ email, password }) => {
    try {
        const response = await api.post('/signin', { email, password })
        dispatch({ type: 'signin', payload: response.data})
        await AsyncStorage.setItem('token', response.data.token)
        await AsyncStorage.setItem('user', JSON.stringify(response.data.user))
        navigate('Todo')
    } catch(err) {
        console.log(err)
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
        await AsyncStorage.setItem('token', response.data.token)
        await AsyncStorage.setItem('user', response.data.user)
        navigate('Todo')
    }catch(err) {
        dispatch({
            type: 'add_error',
            payload: 'Invalid data'
        })
    }
}

const logout = (dispatch) => async() => {
    dispatch({ type: 'logout' })
    navigate('Login')
    await clearNav()
    await AsyncStorage.clear()
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signup, logout, tryLocalSignin },
    { token: null, user: null, errorMessage: ''}
)