import React, { useState, useEffect } from 'react'
import { Card, Text, Image } from 'react-native-elements'
import { StyleSheet, TouchableOpacity } from 'react-native'

const SeedCard = ({ image, name, quantity, onClick, selectedSeed, seedId, activeOpacity}) => {
    const [cardDefaulStyle, setCardDefaultStyle] = useState(styles.cardStyle)

    useEffect(() => {
        if(seedId === selectedSeed && selectedSeed !== undefined){
            setCardDefaultStyle(styles.selectedCardStyle)
        }else{
            setCardDefaultStyle(styles.cardStyle)
        }
    }, [selectedSeed])

    return(
        <TouchableOpacity onPress={onClick} activeOpacity={activeOpacity}>
        <Card containerStyle={ cardDefaulStyle }>
            <Text style={{textAlign: 'center', fontSize: 18}}>{name}</Text>
            <Image
                source={{ uri: image }}
                style={{ width: 70, height: 70 }}
            />
            
            <Text style={{textAlign: 'center'}}>{quantity}</Text>
        </Card>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardStyle: {
        borderRadius: 5,
        margin: 0,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
    selectedCardStyle: {
        borderRadius: 5,
        margin: 0,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderColor: 'green'
    }
})
export default SeedCard