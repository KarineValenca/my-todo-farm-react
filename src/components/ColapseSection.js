import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

const ColapseSection = (props) => {
    const { title, children } = props
    return(
        <View style={styles.viewStyle}>
            <View style={styles.containerStyle}>
                <Text h4 style={styles.textStyle}>
                    {title}  
                </Text>
                <Icon name='angle-down' size={32} color='#5458CC' style={styles.iconStyle}/>
            </View>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        color: '#5458CC',
        paddingLeft: 10,
        
    },
    iconStyle: {
        marginRight: 15
    },
    containerStyle: {
        flexDirection: 'row',
        justifyContent: "space-between" 
    }
})

export default ColapseSection