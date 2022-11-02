import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../../utils'

const Button = ({ label, onPress, type, width, height }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.root(type, width, height)}
    >
      <Text style={styles.labelStyle(type)}>{label}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  root: (type, width, height) => ({
    backgroundColor: type === 'secondary' ? colors.yellow : colors.darkGrey,
    padding: 16,
    borderRadius: 16,
    marginVertical: 10,
    width: width,
    height: height
  }),
  labelStyle: (type) => ({
    color: type === 'secondary' ? colors.black : colors.white,
    fontSize: 16,
    textAlign: 'center'
  })
})