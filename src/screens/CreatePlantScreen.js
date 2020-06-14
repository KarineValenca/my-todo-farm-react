import React from 'react'
import { View, Text } from 'react-native'
import { Header, Card, Button } from 'react-native-elements'
import ButtonHeader from '../components/ButtonHeader'

const CreatePlantScreen = ({ navigation }) => {
    return(
        <View>
            <Header 
                centerComponent={{ 
                    text: 'Plant a Seed', 
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
                leftComponent={
                    <ButtonHeader 
                        icon="arrow-left" 
                        size={20} 
                        onClick={() => navigation.navigate('Farm')}
                    /> 
                }
            />
            <Text> Create Plant Screen </Text>
        </View>
    )
}

CreatePlantScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}
export default CreatePlantScreen