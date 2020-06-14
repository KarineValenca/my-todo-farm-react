import React from 'react'
import { View, Text } from 'react-native'
import CustomHeader from '../components/CustomHeader'

const CreatePlantScreen = ({ navigation }) => {
    return(
        <View>
            <CustomHeader 
                title={"Plant a Seed"} 
                leftIcon={"arrow-left"} 
                leftOnClick={() => navigation.navigate('Farm')}
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