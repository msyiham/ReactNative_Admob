import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import React , { useState, useEffect }from 'react'
import Container from '../../components/container'
import axios from 'axios'
import theme from '../../../font'
import Icon from "react-native-vector-icons/dist/FontAwesome5"
const News = ({navigation}) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [news, setNews] = useState([]);
    const [selectedMenu, setSelectedMenu] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = 'https://api.npoint.io/0230a9f615b373729fae';
                const menuItemResponse = await axios.get(apiUrl);
                setNews(menuItemResponse.data.News);
                //console.log(news);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    fetchData();
    }, []);
    const handleMenuPress = (item) => {
        setSelectedMenu(item);
        navigation.navigate('News Detail', {menuData:item});
    };
    return (
        <Container>
            {news.map((item, index)=>(
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
                        <Text style={theme.font}>{item.date}</Text>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Icon name="chevron-right" color="gray"/>
                    </View>
                </TouchableOpacity>
            ))}
        </Container>
    )
}

export default News

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