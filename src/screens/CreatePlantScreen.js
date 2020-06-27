import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Button } from 'react-native-elements'
import SeedCard from '../components/SeedCard'
import CustomHeader from '../components/CustomHeader'

import usePlantSeed from '../hooks/usePlantSeed'
import useSeeds from '../hooks/useSeeds'

const CreatePlantScreen = ({ navigation }) => {
    const [showUserSeeds, seeds] = useSeeds()
    const [plantSeed, plant] = usePlantSeed()
    
    const [selectedSeed, setSelectedSeed] = useState('')

    const selectSeed = (seedId) => {
        setSelectedSeed(seedId)
    }

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
                            onClick={() => selectSeed(l._id)}
                            selectedSeed={selectedSeed}
                            seedId={l._id}
                        />
                    ))}
                </View>
                <Button 
                    title="Plant" 
                    buttonStyle={{ marginTop: 15, backgroundColor: '#5458CC' }}
                    onPress={() => plantSeed(selectedSeed)}
                    disabled={selectedSeed == ''}
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

CreatePlantScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}
export default CreatePlantScreen