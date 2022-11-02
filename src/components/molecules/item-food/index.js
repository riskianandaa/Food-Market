import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'
import { IconStar } from '../../../assets/Icons'
import Ratings from '../rating'

const ItemFoods = ({ image, name, ratings, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.root} >
      <Image
        source={image}
        style={styles.picture}
      />
      <View style={styles.rating}>
        <Text style={styles.title}>{name}</Text>
        <Ratings number={ratings} />
      </View>
    </TouchableOpacity>
  )
}

export default ItemFoods

const styles = StyleSheet.create({
  root: {
    borderRadius: 16,
    width: 180,
    backgroundColor: colors.white,
    elevation: 2,
    height: 200,
    marginEnd: 20
  },
  picture: {
    height: 120,
    width: 180,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    resizeMode: 'contain',
    // backgroundColor: 'yellow'
  },
  title: {
    paddingTop: 16,
    fontFamily: fonts.primary[500],
    color: colors.black,
    fontSize: 16
  },
  rating: {
    paddingHorizontal: 16
  }
})