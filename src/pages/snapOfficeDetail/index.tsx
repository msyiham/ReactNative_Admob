import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'
import Container from '../../components/container'
import CardNormal from '../../components/cardNormal'
import theme from '../../../font'
import Icon from "react-native-vector-icons/dist/FontAwesome5"
const SnapOfficeDetail = ({route}) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const { menuData } = route.params;
    return (
        <Container>
        <CardNormal cardHeight={windowHeight*0.35} cardWidth={windowWidth*0.8} borderRadius={10}>
            <View style={{justifyContent:'center', alignItems:'center'}}>
                {menuData.image ? (
                    <Image source={{uri: menuData.image}} style={{width: windowWidth*0.5, height: windowHeight*0.2, marginBottom:10}} />
                ) : (
                    <Text>No Image Available</Text>
                )}
                <Text style={theme.fontTitle}>{menuData.title}</Text>
                <Text style={theme.font}><Icon name="phone-alt" size={15} />  {menuData.phone}</Text>
            </View>
            <Text></Text>
        </CardNormal>
        </Container>
    )
}

export default SnapOfficeDetail

const styles = StyleSheet.create({})