import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'

const ProfileComponent = ({ type, name, email }) => {
  return (
    <View style={styles.flex}>
      <View style={styles.root}>
        <Image
          source={{ uri: 'https://picsum.photos/200' }}
          style={styles.picture}
        />
      </View>
      {
        type === 'user profile' ?
          <>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.email}>{email}</Text>
          </>
          : null
      }
    </View>
  )
}

export default ProfileComponent

const styles = StyleSheet.create({
  flex: {
    // flex: 1
    alignItems: 'center',
    justifyContent: 'center',
  },
  picture: {
    height: 80,
    width: 80,
    borderRadius: 40
  },
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    borderWidth: 1,
    height: 100,
    width: 100,
    borderRadius: 50,
    borderStyle: 'dashed'
  },
  name: {
    fontFamily: fonts.primary[600],
    color: colors.black,
    fontSize: 18,
  },
  email: {
    fontFamily: fonts.primary[600],
    color: colors.grey,
    fontSize: 16,
    marginTop: 10
  }
})