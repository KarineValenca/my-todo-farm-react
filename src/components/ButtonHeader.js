import React from 'react'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

const ButtonHeader = ({ icon, size, onClick }) => {
    return (
        <Button 
            icon={
                <Icon name={icon} size={size} color="white"
                />

            }
            onPress={onClick}
        />
    )
}

export default ButtonHeader