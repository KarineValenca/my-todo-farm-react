import createDataContext from './createDataContext'
import api from '../api/api'

const authReducer = (state, action) => {
    switch(action.type) {
        case 'signin':
            return { errorMessage: '', token: action.payload}
        default:
            return state
    }
}

const signin = (dispatch) => async({ email, password }) => {
    try {
        const response = await api.post('/signin', { email, password })
        dispatch({ type: 'signin', payload: response.data.token})
    } catch(err) {
        console.log(err)
    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin },
    { token: null, errorMessage: ''}
)