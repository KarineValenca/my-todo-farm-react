import React from 'react'
import { View, Text } from 'react-native'
import { Header } from 'react-native-elements'

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
        
            <Text>Farm Screen</Text>
        </View>
    )
}

FarmScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}
export default FarmScreen