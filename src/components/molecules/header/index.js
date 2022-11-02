import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, fonts, getData } from '../../../utils'
import { IconBack } from '../../../assets/Icons'

const HeaderComponent = ({ title, desc, type, onPress }) => {
  const [photo, setPhoto] = useState('https://picsum.photos/200')
  useEffect(() => {
    getData('USER_PROFILE').then(res => {
      console.log('user profile success', res)
      setPhoto({ uri: res.profile_photo_url })
    })
  }, [])


  const HeaderBack = () => {
    if (type === 'back') {
      return <IconBack />
    }
  }
  const HeaderRight = () => {
    if (type === 'profile') {
      return (
        <>
          <Image
            source={photo}
            style={styles.picture}
          />
        </>
      )
    }
  }
  return (
    <View style={styles.root}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
      >
        {
          type === 'back' ?
            <HeaderBack /> : null
        }
      </TouchableOpacity>
      <View style={styles.containerDesc}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      {
        type === 'profile' ?
          <HeaderRight /> : null
      }
    </View>
  )
}

export default HeaderComponent

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flexDirection: 'row',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.black
  },
  desc: {
    fontSize: 16,
    fontFamily: fonts.primary[300],
    color: colors.grey,
  },
  containerDesc: {
    marginLeft: 10,
    flex: 1
  },
  picture: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
})