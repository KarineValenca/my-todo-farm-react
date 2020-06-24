import { useState, useContext } from 'react'
import api from '../api/api'
import { Context as AuthContext } from '../context/AuthContext'
import { navigate } from '../navigateRef'

export default() => {
    const { state } = useContext(AuthContext)
    const userId = state.user._id

    const [plant, setPlant] = useState({})
    const [errorMessage, setErrorMessage] = useState('')

    const plantSeed = async(seedId) => {
        try{
            const response = api.post(`/plants/${userId}`, { seed_id: seedId })
            setPlant(response.data)
            navigate('Farm')
        }catch(err){
            console.log(err)
            setErrorMessage('Could not plant. Try again later.')
        }
    }

    return [plantSeed, plant, errorMessage]
}