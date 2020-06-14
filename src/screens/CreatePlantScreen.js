import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'
import SeedCard from '../components/SeedCard'
import CustomHeader from '../components/CustomHeader'

import useSeeds from '../hooks/useSeeds'

const CreatePlantScreen = ({ navigation }) => {
    const [showUserSeeds, seeds] = useSeeds()
    return(
        <View>
            <CustomHeader 
                title={"Plant a Seed"} 
                leftIcon={"arrow-left"} 
                leftOnClick={() => navigation.navigate('Farm')}
            />
            
            <Card containerStyle={{ borderRadius: 5 }} title="Which seed do you like to plant?" titleStyle={{ fontSize: 22 }}>
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
        </View>
    )
}

const styles = StyleSheet.create({
    cardItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

CreatePlantScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}
export default CreatePlantScreen