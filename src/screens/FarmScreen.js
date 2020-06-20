import React, { useEffect } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Card, Button } from 'react-native-elements'
import SeedCard from '../components/SeedCard'
import PlantCard from '../components/PlantCard'
import useSeeds from '../hooks/useSeeds'
import useShowPlants from '../hooks/useShowPlants'
import CustomHeader from '../components/CustomHeader'
import { FlatList } from 'react-native-gesture-handler'

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
                                //key={i}
                                image='image'
                                name={item.name}
                                //seed={l.seed._id}
                                quantity={item.quantity}
                                activeOpacity={1}
                            />
                        )
                    }}
                    numColumns={3}
                />
            </Card>

            <Card containerStyle={{ borderRadius: 5 }} title="Plants" titleStyle={{ fontSize: 22 }}>
                <FlatList 
                    contentContainerStyle={ styles.cardItemStyle2 }
                    data={plants}
                    keyExtractor={(plant) => plant._id}
                    renderItem={({ item }) => {
                        return(
                            <PlantCard 
                                //key={i}
                                image='image'
                                //seed={l.seed._id}
                                seed='teste'
                                plant={item}
                            />
                        )
                    }}
                    numColumns={3}
                />
                <Button 
                    title="Plant!"
                    onPress={() => navigation.navigate('PlantCreate')}
                    buttonStyle={{ marginTop: 10 }}
                />
            </Card>
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