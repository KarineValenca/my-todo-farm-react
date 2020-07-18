import React, { useEffect, useState } from 'react'
import { Card, Text, Image, Button } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import useWaterPlant from '../hooks/useWaterPlants'

const selectPlantImage = (plant) => {
    console.log('AAAAA')
    console.log(plant.seedName)
    console.log(plant.age)
    console.log('AAAAA')
    return '../assets/images/rice1.png'
}

const calculateAge = (plantDate) => {
    const oneDay = 24*60*60*1000
    const birthDate = new Date(plantDate)
    return Math.round(Math.abs((Date.now() - birthDate) / oneDay))
}

const PlantCard = ({ initialPlant, seed }) => {
    const [waterPlant, plant] = useWaterPlant(initialPlant)

    useEffect(() => {
        
    }, [plant.status])

    

    const age = calculateAge(plant.age)

    const needsWater = plant.status
    let waterButton
    if (needsWater === 'Thirsty') {
        waterButton = <Button 
            icon={
                <Icon name={'water'} color={'#5458CC'} size={13}/>
            }
            onPress={() => { 
                waterPlant(plant._id)
            }}
            type="outline"
            buttonStyle={{ borderWidth: 1, borderColor: '#5458CC' }}
        
        />
    }

    const image = selectPlantImage(plant)
    console.log(image)
    return(
        <Card containerStyle={ styles.cardStyle }>
            <Text style={{textAlign: 'center', fontSize: 18}}>{seed}</Text>
            <Image
                source={{ uri: '..assets/images/rice1.png' }}
                style={{ width: 70, height: 70, alignSelf: 'center' }}
            />
            
            <Text style={{textAlign: 'center', fontSize: 14}}>{plant.status}</Text>
            <Text style={{textAlign: 'center'}}>Age: {age} days</Text>
            {waterButton}
            
        </Card>
    )
}

const styles = StyleSheet.create({
    cardStyle: {
        borderRadius: 5,
        margin: 5,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
    }
})
export default PlantCard