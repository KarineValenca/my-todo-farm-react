import { useState } from 'react'
import api from '../api/api'

export default(initialPlant) => {

    const [plant, setPlant] = useState(initialPlant)

    const irrigatePlant = async(plantId) => {
        try{
            const response = await api.put('/plants/irrigate', { plant_id: plantId })
            setPlant(response.data)
        }catch(err) {
            console.log(err)
        }
    }

    return [irrigatePlant, plant]
}