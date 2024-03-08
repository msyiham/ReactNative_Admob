import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import React , { useState, useEffect }from 'react'
import Container from '../../components/container'
import axios from 'axios'
import theme from '../../../font'
import Icon from "react-native-vector-icons/dist/FontAwesome5"
const MoreInfo = ({navigation, route}) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const { menuData } = route.params;
    console.log(menuData.isi)
    const [selectedMenu, setSelectedMenu] = useState(null);
    const handleMenuPress = (item) => {
      setSelectedMenu(item);
      navigation.navigate('News Detail', {menuData:item});
    };
    return (
        <Container>
            {menuData.isi.map((item, index) => (
                <TouchableOpacity key={index} style={[styles.card, {height:windowHeight*0.1, width: windowWidth*0.95}]} onPress={()=>handleMenuPress(item)}>
                    <View style={{width:windowWidth*0.32, justifyContent:'center', alignItems:'center'}}>
                        {item.image ? (
                            <Image source={{uri: item.image}} style={{width: windowWidth*0.3, height: windowHeight*0.08, marginStart:5}} />
                        ) : (
                            <Text>No Image Available</Text>
                        )}
                    </View>
                    <View style={{marginStart:5, justifyContent:'center', width:windowWidth*0.55}}>
                        <Text style={theme.fontBold}>{item.title}</Text>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Icon name="chevron-right" color="gray"/>
                    </View>
                </TouchableOpacity>
            ))}
        </Container>
    )
}

export default MoreInfo

const styles = StyleSheet.create({
    card:
    {
        flexDirection:'row',
        backgroundColor:'#FFFFFF',
        alignSelf:'center',
        marginBottom: 10,
        borderRadius: 10,
    }
})