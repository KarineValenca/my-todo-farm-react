import React from 'react'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

const ButtonHeader = ({ icon, size, onClick, color }) => {
    return (
        <Button 
            buttonStyle={{ backgroundColor: color }}
            icon={
                <Icon name={icon} size={size} color="white"
                />

            }
            onPress={onClick}
        />
    )
}

export default ButtonHeader