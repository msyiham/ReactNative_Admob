import { StyleSheet, Dimensions, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/dist/FontAwesome5";

const CustomIcon = ({name}) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
        <View style={[styles.circle, {width:windowWidth*0.35, height:windowWidth*0.35, borderRadius:windowWidth*0.35}]}>
            <Icon name={name} size={windowWidth*0.18} color="#fff" />
        </View>
    )
}

export default CustomIcon

const styles = StyleSheet.create({
    circle:
    {
        backgroundColor:'#277BC0',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    }
})