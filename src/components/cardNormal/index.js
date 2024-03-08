import { StyleSheet, Dimensions, View, TouchableOpacity } from 'react-native'
import React from 'react'

const CardNormal = ({children, cardWidth, cardHeight, borderRadius}) => {
    return (
        <View style={[styles.card, styles.shadowProp, {width: cardWidth, height: cardHeight, borderRadius: borderRadius}]}>
            {children}
        </View>
    )
}

export default CardNormal

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