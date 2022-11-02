import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconArrowRight } from '../../../assets/Icons'
import { colors, fonts } from '../../../utils'

const ListItemProfile = ({label, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container} onPress={onPress}>
      <Text style={styles.labelStyles}>{label}</Text>
      <IconArrowRight />
    </TouchableOpacity>
  )
}

export default ListItemProfile

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12
  },
  labelStyles: {
    color: colors.black, 
    fontFamily: fonts.primary[500],
    fontSize: 16
  }
})