import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Header, Card, Image } from 'react-native-elements'
import SeedCard from '../components/SeedCard'

const FarmScreen = () => {
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
        
            <Card containerStyle={{ borderRadius: 5 }} title="SEEDS">
                <View style={styles.seedItemStyle}>
                    <SeedCard image='image' name='Wheat' quantity='3'/>
                    <SeedCard image='image' name='Rose' quantity='3'/>
                    <SeedCard image='image' name='Rice' quantity='3'/>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    seedItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

FarmScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}
export default FarmScreen