import { useEffect, useState, useContext } from 'react'
import api from '../api/api'
import { Context as AuthContext } from '../context/AuthContext'

export default() => {
    const { state } = useContext(AuthContext)
    const userId = state.user._id
    const [plants, setPlants] = useState([])

    const showUserPlants = async() => {
        try{
            const response = await api.get(`/plants/${userId}`)
            if(response.data != undefined) {
                setPlants(response.data)
            }else{
                setPlants([])
            }
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        showUserPlants()
    }, [])
    return [showUserPlants, plants]
}