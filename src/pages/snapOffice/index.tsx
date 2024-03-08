import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import theme from '../../../font';
import Container from '../../components/container'
import Card from '../../components/card'
const SnapOffice = ({route, navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const { menuData } = route.params;
  console.log(menuData.isi)
  const [selectedMenu, setSelectedMenu] = useState(null);
  const handleMenuPress = (item) => {
    setSelectedMenu(item);
    navigation.navigate('Snap Office Detail', {menuData:item});
};
  return (
    <Container>
        <View style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
            {menuData.isi.map((item, index) => (
                <Card key={index} cardHeight={0.2} cardWidth={0.3} onPress={()=>handleMenuPress(item)}>
                    {item.image ? (
                      <Image source={{uri: item.image}}  width={windowWidth*0.2} height={windowHeight*0.1} style={styles.image}/>
                    ):(
                      <Text>Image Not Found</Text>
                    )}
                    <Text style={theme.font}>{item.title}</Text>
                </Card>
            ))}
        </View>
    </Container>
  )
}

export default SnapOffice

const styles = StyleSheet.create({
  image:
  {
    marginBottom: 5
  }
})