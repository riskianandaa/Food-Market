import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconHomeActive, IconHomeInActive, IconOrderActive, IconOrderInActive, IconProfileActive, IconProfileInActive  } from '../../../assets/Icons'
import { colors, fonts } from '../../../utils'

const TabItems = ({ title, active, onPress, onLongPress }) => {
  const Icons = () => {
    if (title === 'Home') {
      return active ? <IconHomeActive /> : <IconHomeInActive />
    }
    if (title === 'Order Food') {
      return active ? <IconOrderActive /> : <IconOrderInActive /> 
    }
    if (title === 'Profile') {
      return active ? <IconProfileActive /> : <IconProfileInActive />
    }
    return <DoctorActive />
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress} activeOpacity={0.8} >
      <Icons />
      <Text style={styles.titleStyle(active)}>{title}</Text>
    </TouchableOpacity>
  )
}

export default TabItems

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  titleStyle: (active) => ({
    fontFamily : fonts.primary[600],
    color: active ? colors.text.active : colors.text.inactive,
    fontSize: 10,
    marginTop: 4
  })
})