import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Header, Card } from 'react-native-elements'
import SeedCard from '../components/SeedCard'
import useSeeds from '../hooks/useSeeds'

const FarmScreen = () => {
    const [showUserSeeds, seeds, errorMessage] = useSeeds()
    return(
        <View>
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
                <View style={styles.seedItemStyle}>
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
        </View>
    )
}

const styles = StyleSheet.create({
    seedItemStyle: {
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