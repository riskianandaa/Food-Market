import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'
import Number from '../number'

const TextValueHorizontal = ({ label, value, type, valueColor = '#020202' }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>{label}</Text>
      {type === 'currency' ? <Number number={value} style={styles.valueStyle(valueColor)} /> :
        <Text style={styles.valueStyle(valueColor)}>{value}</Text>
      }
    </View>
  )
}

export default TextValueHorizontal

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10
  },
  labelStyle: {
    fontFamily: fonts.primary[400],
    fontSize: 16
  },
  valueStyle: (valueColor) => ({
    fontFamily: fonts.primary[600],
    color: valueColor,
    fontSize: 16
  })
})