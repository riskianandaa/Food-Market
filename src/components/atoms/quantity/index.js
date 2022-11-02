import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { IconAdd, IconMin } from '../../../assets/Icons'
import { colors, fonts } from '../../../utils'
import { useEffect } from 'react'

const Quantity = ({onValueChange}) => {
  // cara pertama
  const [count, setCount] = useState(0)
  // cara kedua
  const [value, setValue] = useState(1)

  useEffect(() => {
    onValueChange(value)
  }, [])

  const onCount = (type) => {
    let result = value;
    if (type === 'plus') {
      result = value + 1
    }
    if (type === 'minus') {
      if (value > 1) {
        result = value - 1
      }
    }
    setValue(result)
    onValueChange(result)
  }

  return (
    <View style={styles.root}>
      <TouchableOpacity
        activeOpacity={0.7}
        //cara pertama
        // onPress={() => { setCount(current => (current - 1)) }}
        //cara kedua
        onPress={() => { onCount('minus') }}
      >
        <IconMin />
      </TouchableOpacity>
      <View style={styles.gap} />
      <Text style={styles.amount}>{value}</Text>
      <View style={styles.gap} />
      <TouchableOpacity
        activeOpacity={0.7}
        // onPress={() => { setCount(current => (current + 1))}}
        onPress={() => { onCount('plus') }}
      >
        <IconAdd />
      </TouchableOpacity>
    </View>
  )
}

export default Quantity

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  gap: {
    width: 10
  },
  amount: {
    fontSize: 16,
    color: colors.black,
    fontFamily: fonts.primary[500]
  }
})