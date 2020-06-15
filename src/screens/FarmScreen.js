import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Button } from 'react-native-elements'
import SeedCard from '../components/SeedCard'
import PlantCard from '../components/PlantCard'
import useSeeds from '../hooks/useSeeds'
import useShowPlants from '../hooks/useShowPlants'
import CustomHeader from '../components/CustomHeader'

const FarmScreen = ({ navigation }) => {
    const [showUserSeeds, seeds] = useSeeds()
    const [showUserPlants, plants] = useShowPlants()

    useEffect(() => {
        showUserPlants()
    }, [])

    return(
        <View style={{ flex: 1 }}>
            <CustomHeader 
                title={"My Farm"}
            />
        
            <Card containerStyle={{ borderRadius: 5 }} title="Seeds" titleStyle={{ fontSize: 22 }}>
                <View style={styles.cardItemStyle}>
                    { seeds.map((l, i) => (
                        <SeedCard 
                            key={i}
                            image='image'
                            name={l.name}
                            quantity={l.quantity}
                            activeOpacity={1}
                        />
                    ))}
                </View>
            </Card>

            <Card containerStyle={{ borderRadius: 5 }} title="Plants" titleStyle={{ fontSize: 22 }}>
                <View style={styles.cardItemStyle}>
                    { plants.map((l, i) => (
                        <PlantCard 
                            key={i}
                            image='image'
                            seed={l.seed}
                            age={l.age}
                            status={l.status}
                        />
                    ))}
                </View>
                <Button 
                    title="Plant!"
                    onPress={() => navigation.navigate('PlantCreate')}
                />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    cardItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

FarmScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}
export default FarmScreen