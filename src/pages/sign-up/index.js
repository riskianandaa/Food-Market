import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { Button, HeaderComponent, ProfileComponent, TextInput } from '../../components'
import { colors, showMessage } from '../../utils'
import { useSelector, useDispatch } from 'react-redux'
import useForm from '../../utils/useForm'
import { launchImageLibrary } from 'react-native-image-picker';
import { useState } from 'react'


const SignUp = ({ navigation }) => {
  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
    // password_confirmation: ''
  })
  const dispatch = useDispatch()
  const [photo, setPhoto] = useState('')

  const onSubmit = () => {
    console.log('form:', form)
    dispatch({ type: 'SET_REGISTER', value: form })
    navigation.navigate('Address')
  }

  const addPhoto = () => {
    launchImageLibrary({
      quality: 0.5,
      maxWidth: 200,
      maxHeight: 200
    }, (response) => {
      console.log('Response =', JSON.stringify(response, null, 2))
      if (response.didCancel || response.errorCode) {
        showMessage('Your cancel choose photo')
      } else {
        const source = { uri: response.assets[0].uri }
        const dataImage = {
          uri: response.assets[0].uri,
          type: response.assets[0].type,
          name: response.assets[0].fileName
        }
        
        setPhoto(source)
        dispatch({type: 'SET_PHOTO', value: dataImage})
        dispatch({type: 'SET_UPLOAD_STATUS', value: true})
      }
    })
  }

  return (
    <ScrollView style={styles.root} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.root}>
        <HeaderComponent type={'back'} title='Sign Up' desc={'Register and eat'} onPress={() => { navigation.goBack() }} />
        <View style={styles.containerFlex}>
          {/* <ProfileComponent /> */}
          <View style={{ borderWidth: 1, borderStyle: 'dashed', height: 100, width: 100, borderRadius: 50, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
            <TouchableOpacity onPress={addPhoto} activeOpacity={0.7}>
              <View style={{ height: 90, width: 90, borderRadius: 45 }}>
                {photo ? (
                  <Image source={photo} style={{ width: 90, height: 90, borderRadius: 90, justifyContent: 'center', alignItems: 'center' }} />
                )
                  :
                  (
                    <View style={{ width: 90, height: 90, borderRadius: 90, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F0F0F0',}}>
                      <Text style={{ textAlign: 'center', color: colors.black }}>Add Photo</Text>
                    </View>
                  )
                }
              </View>
            </TouchableOpacity>
          </View>
          <TextInput
            label={'Full Name'}
            placeholder='Type your full name'
            value={form.name}
            onChangeText={(newValue) => setForm('name', newValue)}
          />
          <TextInput
            label={'Email Address'}
            placeholder='Type your email address'
            value={form.email}
            onChangeText={(newValue) => setForm('email', newValue)}
          />
          <TextInput
            label={'Password'}
            placeholder='Type your password'
            secureTextEntry
            value={form.password}
            onChangeText={(newValue) => setForm('password', newValue)}
          />
          <Button label={'Continue'} type='secondary' onPress={onSubmit} />
        </View>
      </View>
    </ScrollView>
  )
}

export default SignUp

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
  containerFlex: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white
  }
})