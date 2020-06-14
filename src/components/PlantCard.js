import React from 'react'
import { Card, Text, Image } from 'react-native-elements'
import { StyleSheet } from 'react-native'

const PlantCard = ({ image, seed, status, age}) => {
    return(
        <Card containerStyle={ styles.cardStyle }>
            <Text style={{textAlign: 'center', fontSize: 18}}>{seed}</Text>
            <Image
                source={{ uri: image }}
                style={{ width: 70, height: 70 }}
            />
            
            <Text style={{textAlign: 'center'}}>{status}</Text>
            <Text style={{textAlign: 'center'}}>{age}</Text>
        </Card>
    )
}

const styles = StyleSheet.create({
    cardStyle: {
        borderRadius: 5,
        margin: 0,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
    }
})
export default PlantCard