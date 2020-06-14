import React from 'react'
import { Header } from 'react-native-elements'
import ButtonHeader from './ButtonHeader'

const CustomHeader = ({ title, leftIcon, leftOnClick, rightIcon, rightOnClick }) => {
    return(
        <Header 
        centerComponent={{ 
            text: title, 
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
                icon={leftIcon} 
                size={20} 
                onClick={leftOnClick}
            /> 
        }
        rightComponent={
            <ButtonHeader 
                icon={rightIcon}
                size={20} 
                onClick={rightOnClick}
            />
        }
        />
    )
}

export default CustomHeader