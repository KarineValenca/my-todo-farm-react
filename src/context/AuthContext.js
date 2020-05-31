import createDataContext from './createDataContext'

const authReducer = (state, action) => {
    switch(action.type) {
        case 'sigin':
            return { errorMessage: ''}
        default:
            return state
    }
}

const signin = (dispatch) => async ({ email, password }) => {
    try {
        dispatch({ type: 'signin', payload :' '})
    } catch(err) {
        console.log(err)
    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin },
    { token: null, errorMessage: ''}
)