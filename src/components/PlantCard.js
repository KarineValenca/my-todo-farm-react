import React from 'react'
import { Card, Text, Image, Button } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import useWaterPlant from '../hooks/useWaterPlants'

const PlantCard = ({ plant, seed, image }) => {
    const [waterPlant] = useWaterPlant()

    const calculateAge = (plantDate) => {
        const oneDay = 24*60*60*1000
        const birthDate = new Date(plantDate)
        return Math.round(Math.abs((Date.now() - birthDate) / oneDay))
    }

    const age = calculateAge(plant.age)

    const needsWater = plant.status
    let waterButton
    if (needsWater === 'Thirsty') {
        waterButton = <Button icon={
            <Icon name={'water'} color={'white'}/>
        }
        onPress={() => waterPlant(plant._id)}
        />
    }

    return(
        <Card containerStyle={ styles.cardStyle }>
            <Text style={{textAlign: 'center', fontSize: 18}}>{seed}</Text>
            <Image
                source={{ uri: image }}
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