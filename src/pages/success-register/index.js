import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { ImgSuccessSignUp } from '../../assets/llustrations'
import { Button } from '../../components'

const SuccessSignUp = ({navigation}) => {
  return (
    <View style={styles.root}>
      <Image
        source={ImgSuccessSignUp}
        style={styles.picture}
      />
      <Text style={styles.headline} >Yeay! Completed</Text>
      <Text style={styles.desc} numberOfLines={2} >Now your able to ordersome foods as a self-reward</Text>
      <Button type={'secondary'} label='Find Foods' onPress={() => { navigation.reset({ index: 0, routes:[{ name: 'Main App' }] }) }} />
    </View>
  )
}

export default SuccessSignUp

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