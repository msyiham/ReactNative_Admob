import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import theme from '../../../font'
const SplashScreen = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <View style={[theme.container, {justifyContent:'center', alignItems:'center', backgroundColor:'#277BC0'}]}>
      <Text style={[theme.fontTitle, {color:'white', marginBottom:windowHeight*0.08}]}>JUDUL APK</Text>
      <TouchableOpacity style={[styles.button, {width: windowWidth*0.8, height:windowHeight*0.07}]} onPress={()=>navigation.navigate('Main')}>
        <Text style={[theme.fontTitle, {color:'white'}]}>MASUK</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  button:
  {
    backgroundColor: '#FFB200',
    justifyContent: 'center',
    alignItems: 'center',
  },
})