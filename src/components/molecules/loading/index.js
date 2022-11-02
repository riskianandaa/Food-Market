import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../../utils'

const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
        <ActivityIndicator size={'small'} color={colors.yellow} />
        <Text style={styles.loading}>Loading...</Text>
    </View>
  )
}

export default LoadingIndicator

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0, 0.2)'
  },
  loading: {
    color: colors.black,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})