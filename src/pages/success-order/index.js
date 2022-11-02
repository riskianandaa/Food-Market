import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { ImgDelivery, ImgSuccessSignUp } from '../../assets/llustrations'
import { Button } from '../../components'

const SuccessOrder = ({navigation}) => {
  return (
    <View style={styles.root}>
      <Image
        source={ImgDelivery}
        style={styles.picture}
      />
      <Text style={styles.headline} >You've Mode Order</Text>
      <Text style={styles.desc} numberOfLines={2} >Just stay at home while we are preparing your best foods</Text>
      <Button type={'secondary'} width={200} label='Order Other Foods' onPress={() => { navigation.replace('Main App') }} />
      <Button label='View My Order' width={200} onPress={() => { navigation.replace('Main App', { screen: 'Order Food' })}} />
    </View>
  )
}

export default SuccessOrder

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  picture: {
    resizeMode: 'contain',
    height: 300,
    width: 200
  },
  headline: {
    color: colors.black,
    fontFamily: fonts.primary[600],
    fontSize: 20
  },
  desc: {
    color: colors.black,
    fontFamily: fonts.primary[200],
    fontSize: 16,
    textAlign: 'center'
  }
})