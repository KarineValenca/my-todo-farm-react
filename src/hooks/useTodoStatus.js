import { useEffect, useState } from 'react'
import api from '../api/api'
import { grey } from 'color-name'

export default(props) => {
    const todoId = props._id
    const [isClicked, setIsClicked] = useState(false)
    const [todoStatus, setTodoStatus] = useState(props.isDone)
    const [errorMessage, setErrorMessage] = useState('')
    const [styles, setStyles] = useState({})
    const [checkboxProps, setCheckboxProps] = useState({})

    const changeTodoStatus = async() => {
        try{
            const response = await api.put(`/change-todo-status/${todoId}`)
            setTodoStatus(response.data.isDone)
            setInitialStyle()
            setInicialCheckboxProps()
            setIsClicked(false)
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
        console.log(todoStatus)
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