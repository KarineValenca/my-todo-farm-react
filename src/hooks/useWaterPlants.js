import { useState } from 'react'
import api from '../api/api'

export default() => {

    const [plant, setPlant] = useState({})
    const irrigatePlant = async(plantId) => {
        console.log(plantId)
        try{
            const response = api.put('/plants/irrigate', { plant_id: plantId })
            setPlant(response.data)
        }catch(err) {
            console.log(err)
        }
    }

    return [irrigatePlant, plant]
}