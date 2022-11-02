import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { colors } from '../../../utils'

const TextInputComponent = ({label, placeholder, ...restProps}) => {
  return (
    <View style={styles.root}>
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput 
        style={styles.textInputStyle}
        placeholder={placeholder}
        {...restProps}
      />
    </View>
  )
}

export default TextInputComponent

const styles = StyleSheet.create({
  root: {
    marginBottom: 10
  },  
  textInputStyle: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    padding: 10,
    marginTop: 8,
    color: colors.black
  },
  labelStyle: {
    color: colors.black
  }
})