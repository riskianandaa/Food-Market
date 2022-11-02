import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { IconShop } from '../../assets'
import { fonts } from '../../utils/fonts'
import { getData } from '../../utils'

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      getData('TOKEN').then((res) => {
        console.log('token :', res)
        if(res){
          navigation.reset({ index: 0, routes: [{ name: 'Main App' }] })
        } else {
          navigation.replace('SignIn')
        }
      })
    }, 2000)
  }, [])
  return (
    <View style={styles.root}>
      <IconShop />
      <Text style={styles.text} >Food Market</Text>
    </View>
  )
}


export default SplashScreen

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: '#FFC700',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#020202',
    fontSize: 32,
    marginTop: 12,
    fontFamily: fonts.primary[700]
  }
})