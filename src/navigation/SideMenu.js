import React, {useContext} from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import CustomHeader from '../components/CustomHeader'
import { Context as AuthContext } from '../context/AuthContext'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SideMenu = ({ navigation }) => {
    const { logout } = useContext(AuthContext)

    return (
        <View style={{ flex: 1 }}>
            <CustomHeader 
                title={'Menu'} 
            />
            <Button type='clear'onPress={() => logout()} title='Logout' />
        </View>
    )
}

export default SideMenu