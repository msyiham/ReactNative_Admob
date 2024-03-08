import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../../font'
const Menu = ({route}) => {
  const { menuData } = route.params;
  return (
    <View style={theme.container}>
      <Text style={theme.fontTitle}>{menuData.title}</Text>
      <Text style={theme.font}>{menuData.isi}</Text>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({})