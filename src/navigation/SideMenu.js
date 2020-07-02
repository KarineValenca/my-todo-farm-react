import React, { useContext } from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import CustomHeader from '../components/CustomHeader'
import { Context as AuthContext } from '../context/AuthContext'


const SideMenu = () => {
    const { logout } = useContext(AuthContext)

    return (
        
        <View style={{ flex: 1 }}>
            <CustomHeader 
                title={'Menu'} 
            />

            <Button 
                type='outline' 
                onPress={() => logout()} 
                title='Logout' 
                titleStyle={{ color: '#5458CC'}}
                buttonStyle={{ borderWidth: 2, borderColor: '#5458CC', marginTop: 10 }}
            />
            
        </View>
    )
}

export default SideMenu