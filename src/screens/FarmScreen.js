import React, { useEffect, useState } from 'react'
import { StyleSheet, FlatList, ScrollView } from 'react-native'
import { Card, Button, Text } from 'react-native-elements'
import SeedCard from '../components/SeedCard'
import useSeeds from '../hooks/useSeeds'
import useShowPlants from '../hooks/useShowPlants'
import CustomHeader from '../components/CustomHeader'
import PlantSection from './PlantSection'
import usePlantSeed from '../hooks/usePlantSeed'
import { color } from 'react-native-reanimated'

const FarmScreen = ({ navigation }) => {
    const [showUserSeeds, seeds] = useSeeds()
    const [showUserPlants, plants] = useShowPlants()
    const [plantSeed, plant] = usePlantSeed()
    const [selectedSeed, setSelectedSeed] = useState('')
    const [seedQtd, setSeedQtd] = useState(0)

    useEffect(() => {
        console.log(seeds.length)
        showUserSeeds()
        showUserPlants()
    }, [selectedSeed])


    const plantButton = 
        <Button 
            title="Plant" 
            buttonStyle={{ marginTop: 15, backgroundColor: '#5458CC' }}
            onPress={() => {
                plantSeed(selectedSeed)
                setSelectedSeed('')
            }}
            disabled={selectedSeed == ''}
        />


    const emptySeedsMessage = 
        <Text style={{ alignSelf: 'center' }}>
            Finish a task to win a seed and start your farm!
        </Text>

    const seedList = 
        <FlatList 
            contentContainerStyle={ styles.cardItemStyle2 }
            data={seeds}
            keyExtractor={(seed) => seed._id}
            renderItem={({ item }) => {
                return(
                    <SeedCard 
                        image='image'
                        name={item.name}
                        quantity={item.quantity}
                        onClick={() => {
                            setSelectedSeed(item._id)
                            setSeedQtd(item.quantity)
                        }}
                        selectedSeed={selectedSeed}
                        seedId={item._id}
                    />
                )
            }}
            numColumns={3}
        />
           
    return(
        <ScrollView style={{ flex: 1 }}>
            <CustomHeader 
                title={"My Farm"}
            />
            
            <Card containerStyle={{ borderRadius: 5 }} title="Seeds" titleStyle={{ fontSize: 22 }}>
                {seeds.length > 0 ? seedList : emptySeedsMessage }
                {selectedSeed && seedQtd > 0 ? plantButton : null }
            </Card>
            
            <PlantSection navigation={navigation} plants={plants}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cardItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    cardItemStyle2: {
        alignItems: 'center',
        justifyContent: 'space-around',
    }
})

FarmScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}
export default FarmScreen