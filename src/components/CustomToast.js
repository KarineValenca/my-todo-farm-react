import React, { useState, useRef } from 'react'
import { View, StyleSheet, Animated } from 'react-native'
import { Text } from 'react-native-elements'

const CustomToast = ({ navigation, text }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current

    useState(() => {
        setTimeout( () => fadeIn(), 300)
        setTimeout( () => fadeOut(), 3500)
    }, [])
    
    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
            }).start()  
    }
    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true
            }).start()  
    }

    return(
        <Animated.View style={[styles.viewStyle, {opacity: fadeAnim}]}>
            <Text style={styles.textStyle}>{text}</Text>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        position: 'absolute',
        transform: [{ translateY: 75 }],
        height: 50,
        width: '80%',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#1B8C11',
        borderRadius: 5,

        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 2,
    },
    textStyle: {
        fontSize: 17,
    }
})
export default CustomToast