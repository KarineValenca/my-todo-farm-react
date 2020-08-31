import React from 'react'
import { Card, Button } from 'react-native-elements'
import { StyleSheet, FlatList } from 'react-native'
import PlantCard from '../components/PlantCard'

const PlantSection = ({ navigation, plants }) => {
    return (
        <Card containerStyle={{ borderRadius: 5 }} title="Plants" titleStyle={{ fontSize: 22 }}>
            <FlatList 
                contentContainerStyle={ styles.cardItemStyle }
                data={plants}
                keyExtractor={(plant) => plant._id}
                renderItem={({ item }) => {
                    return(
                        <PlantCard 
                            seed={item.seedName}
                            initialPlant={item}
                        />
                    )
                }}
                numColumns={3}
            />
        </Card>
    )
}

const styles = StyleSheet.create({
    cardItemStyle: {
        alignItems: 'center',
        justifyContent: 'space-around',
    }
})
export default PlantSection