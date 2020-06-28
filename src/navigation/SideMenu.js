import React, {useContext} from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import CustomHeader from '../components/CustomHeader'
import { Context as AuthContext } from '../context/AuthContext'
import CustomToast from '../components/CustomToast'

const SideMenu = ({ navigation }) => {
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
            <CustomToast text={'You completed a task'} gravity={50}/>
        </View>
        
            

    )
}

export default SideMenu