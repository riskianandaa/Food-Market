import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ImgEmptyOrder } from '../../../assets/llustrations'
import { colors, fonts } from '../../../utils'
import { Button } from '../../../components'
import { useNavigation } from '@react-navigation/native'

const EmptyOrder = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.root}>
      <Image
        source={ImgEmptyOrder}
        style={styles.picture}
      />
      <Text style={styles.headline} >Yeay! Completed</Text>
      <Text style={styles.desc} numberOfLines={2} >Now your able to ordersome foods as a self-reward</Text>
      <Button type={'secondary'} width={200} label='Find Foods' onPress={() => { navigation.replace('Main App') }} />
    </View>
  )
}

export default EmptyOrder

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