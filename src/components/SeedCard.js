import React, { useState, useEffect } from 'react'
import { Card, Text, Image } from 'react-native-elements'
import { StyleSheet, TouchableOpacity } from 'react-native'
import SeedImages from '../assets/images/SeedImages'

const selectSeedImage = (seed) => {
    // just a paliative solution while i dont fix the undefined seeds
    if (seed == undefined) seed = ''
    const seedName = seed.toLowerCase()
    const image = SeedImages(seedName)
    return image.sproot
}

const SeedCard = ({ name, quantity, onClick, selectedSeed, seedId, activeOpacity}) => {
    const [cardDefaulStyle, setCardDefaultStyle] = useState(styles.cardStyle)

    useEffect(() => {
        if(seedId === selectedSeed && selectedSeed !== undefined){
            setCardDefaultStyle(styles.selectedCardStyle)
        }else{
            setCardDefaultStyle(styles.cardStyle)
        }
    }, [selectedSeed])

    const image = selectSeedImage(name)

    return(
        <TouchableOpacity onPress={onClick} activeOpacity={activeOpacity}>
        <Card containerStyle={ cardDefaulStyle }>
            <Text style={{textAlign: 'center', fontSize: 18}}>{name}</Text>
            <Image
                source={ image }
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
        margin: 5,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
    selectedCardStyle: {
        borderRadius: 5,
        margin: 5,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderColor: '#5458CC'
    }
})
export default SeedCard