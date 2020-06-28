import { useEffect, useState, useContext } from 'react'
import { Context as TodoContext } from '../context/TodoContext'
import { Context as AuthContext } from '../context/AuthContext'
import { ToastAndroid } from 'react-native'

export default(props) => {
    const showToast = () => {
        ToastAndroid.showWithGravity("You won a seed!", ToastAndroid.SHORT, ToastAndroid.TOP)
    }

    const { state } = useContext(AuthContext)
    const userId = state.user._id

    const { showTodos, updateTodoStatus } = useContext(TodoContext)

    const todoId = props._id
    const [isClicked, setIsClicked] = useState(false)
    const [todoStatus, setTodoStatus] = useState(props.isDone)
    const [errorMessage, setErrorMessage] = useState('')
    const [styles, setStyles] = useState({})
    const [checkboxProps, setCheckboxProps] = useState({})

    const changeTodoStatus = async() => {
        try{
            updateTodoStatus(todoId)
            showToast()
            setTodoStatus(response.data.isDone)
            setInitialStyle()
            setInicialCheckboxProps()
            setIsClicked(false)
            showTodos(userId)
        }catch(err){
            setErrorMessage("Something went wrong, try again later")
        }
    }

    const setInitialStyle = () => {
        if(todoStatus){
            setStyles({
                color: 'grey',
                textDecorationLine: 'line-through'
            })
        }else{
            setStyles({})
        }
    }

    const setInicialCheckboxProps = () => {
        if(todoStatus){
            setCheckboxProps({
                checked: true,
                checkedColor: 'grey',
            })
        }else{
            setCheckboxProps({
                checked: false,
                onPress: () => {setIsClicked(true)}
            })
        }
    }

    useEffect(() => {
        setInitialStyle()
        setInicialCheckboxProps()
        if(isClicked) {
            changeTodoStatus()
        }
    }, [isClicked])

    return [ changeTodoStatus, styles, checkboxProps, errorMessage ]
}