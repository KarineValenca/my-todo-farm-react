import React, { useEffect } from 'react'
import { StyleSheet, ScrollView, FlatList } from 'react-native'
import { Card, Button } from 'react-native-elements'
import SeedCard from '../components/SeedCard'
import useSeeds from '../hooks/useSeeds'
import useShowPlants from '../hooks/useShowPlants'
import CustomHeader from '../components/CustomHeader'
import PlantSection from '../components/PlantSection'

const FarmScreen = ({ navigation }) => {
    const [showUserSeeds, seeds] = useSeeds()
    const [showUserPlants, plants] = useShowPlants()

    useEffect(() => {
        showUserPlants()
    }, [])

    return(
        <ScrollView style={{ flex: 1 }}>
            <CustomHeader 
                title={"My Farm"}
            />
        
            <Card containerStyle={{ borderRadius: 5 }} title="Seeds" titleStyle={{ fontSize: 22 }}>
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
                                activeOpacity={1}
                            />
                        )
                    }}
                    numColumns={3}
                />
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