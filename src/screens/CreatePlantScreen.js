import React, { useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
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
                    <FlatList 
                        contentContainerStyle={ styles.cardItemStyle }
                        data={seeds}
                        keyExtractor={(seed) => seed._id}
                        renderItem={({ item }) => {
                            return(
                                <SeedCard 
                                    image='image'
                                    name={item.name}
                                    quantity={item.quantity}
                                    onClick={() => selectSeed(item._id)}
                                    selectedSeed={selectedSeed}
                                    seedId={item._id}
                                />
                            )
                        }}
                        numColumns={3}
                    />
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
        alignItems: 'center',
        justifyContent: 'space-around',
    }
})

CreatePlantScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}
export default CreatePlantScreen