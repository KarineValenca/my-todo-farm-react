import React, { useEffect, useRef } from 'react'
import { View, StyleSheet, Animated } from 'react-native'
import { Text } from 'react-native-elements'

const CustomToast = ({ text }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current

    useEffect(() => {
        console.log("teste")
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true
        }).start()
    })

    return(
        <Animated.View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{text}</Text>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        transform: [{ translateY: -50 }],
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