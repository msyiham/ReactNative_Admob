import { StyleSheet, Dimensions, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Card = ({children, cardWidth, cardHeight, onPress}) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
        <TouchableOpacity style={[styles.card, styles.shadowProp, {width: windowWidth * cardWidth, height: windowHeight * cardHeight}]} onPress={onPress}>
            {children}
        </TouchableOpacity>
    )
}

export default Card

const styles = StyleSheet.create({
    card:{
        backgroundColor: '#fff',
        alignSelf: 'center',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 5
    },
    shadowProp: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.7,
        shadowRadius: 9.51,
        elevation: 15,
    },
})