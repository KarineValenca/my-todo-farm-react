import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Header, Card, Button } from 'react-native-elements'
import SeedCard from '../components/SeedCard'
import PlantCard from '../components/PlantCard'
import useSeeds from '../hooks/useSeeds'
import useShowPlants from '../hooks/useShowPlants'

const FarmScreen = ({ navigation }) => {
    const [showUserSeeds, seeds] = useSeeds()
    const [showUserPlants, plants] = useShowPlants()

    return(
        <View style={{ flex: 1 }}>
            <Header 
                centerComponent={{ 
                    text: 'My Farm', 
                    style: { 
                        color: '#fff',
                        fontSize: 24,
                        fontWeight: 'bold'
                    } 
                }}
                
                containerStyle={{
                    justifyContent: 'space-around',
                }}
                statusBarProps={{
                    translucent: true,
                }}
                
            />
        
            <Card containerStyle={{ borderRadius: 5 }} title="Seeds" titleStyle={{ fontSize: 22 }}>
                <View style={styles.cardItemStyle}>
                    { seeds.map((l, i) => (
                        <SeedCard 
                            key={i}
                            image='image'
                            name={l.name}
                            quantity={l.quantity}
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