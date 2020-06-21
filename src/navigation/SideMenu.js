import React from 'react'
import { View, Text } from 'react-native'
import CustomHeader from '../components/CustomHeader'
import { navigate } from '../navigateRef'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SideMenu = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <CustomHeader 
                title={'Menu'} 
            />
            <TouchableOpacity>
                <Text> Logout </Text>
            </TouchableOpacity>
        </View>
    )
}

export default SideMenu