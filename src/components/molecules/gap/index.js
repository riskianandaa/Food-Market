import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Gap = ({ width, height }) => {
  return (
    <View style={styles.container(height, width)} />  
  )
}

export default Gap

const styles = StyleSheet.create({
  container: (height, width) => ({
    height: height,
    width: width
  })
})