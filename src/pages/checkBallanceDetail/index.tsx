import { ScrollView, StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import Container from '../../components/container'
import theme from '../../../font'

const CheckBallanceDetail = ({route}) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const { menuData } = route.params;
    return (
      <Container>
        <ScrollView style={{padding:10}}>
            <View>
                {menuData.image ? (
                    <Image source={{uri: menuData.image}} style={{width: windowWidth*0.9, height: windowHeight*0.3, alignSelf:'center', marginBottom:10}} />
                ) : (
                    <Text>No Image Available</Text>
                )}
                <Text style={theme.fontTitle}>{menuData.title}</Text>
                <Text style={theme.font}>{menuData.description}</Text>
            </View>
        </ScrollView>
      </Container>
    )
  }

export default CheckBallanceDetail

const styles = StyleSheet.create({})