import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ProfileComponent, ProfileTabSection } from '../../components'
import { colors, getData } from '../../utils'
import { useState } from 'react'
import { useEffect } from 'react'

const Profile = () => {
  const [userProfile, setUserProfile] = useState({})
  useEffect(() => {
    getData('USER_PROFILE').then(res => {
      setUserProfile(res)
    })
  }, [])

  return (
    <View style={styles.root}>
      <View style={styles.containerHeaderProfile}>
        <ProfileComponent type={'user profile'} name={userProfile.name} email={userProfile.email} />
        <Image 
          source={{ uri: userProfile.profile_photo_url }}
        />
      </View>
      <View style={styles.containerItem}>
        <ProfileTabSection />
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  containerHeaderProfile: {
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: colors.white
  },
  containerItem: {
    marginTop: 20,
    flex: 1,
    backgroundColor: colors.white
  }
})