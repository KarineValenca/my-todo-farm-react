import { useEffect, useState, useContext } from 'react'
import api from '../api/api'
import { Context } from '../context/AuthContext'

export default() => {
    const { state } = useContext(Context)
    const [seeds, setSeeds] = useState([])
    const [errorMessage, setErrorMessage] = useState([])
    const userId = state.user._id

    const showUserSeeds = async() => {
        try{
            const response = await api.get(`/seeds/${userId}`)
            setSeeds(response.data)
        }catch(err){
            setErrorMessage('Could not load, try again later')
            console.log(err)
        }
    }

    useEffect(() => {
        showUserSeeds()
    }, [])

    return [showUserSeeds, seeds, errorMessage]
}