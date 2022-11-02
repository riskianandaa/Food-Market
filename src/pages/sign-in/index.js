import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Button, HeaderComponent, TextInput } from '../../components'
import { colors, getData } from '../../utils'
import TextInputComponent from '../../components/molecules/text-input'
import useForm from '../../utils/useForm'
import BASE_URL from '../../config/base-url'
import Axios from 'react-native-axios'
import { useDispatch } from 'react-redux'
import { setLoading, signInActions } from '../../redux/actions'
import { useEffect } from 'react'

const SignIn = ({ navigation }) => {
  // const [email, setEmail] = useState('')
  // const [password, SetPassword] = useState('')
  const [form, setForm] = useForm({
    email: '',
    password: ''
  })

  const dispatch = useDispatch()

  const onSubmit = () => {
    console.log('form:', form)
    // const data = {
    //   email,
    //   password
    // }
    // Axios.post('https://foodmarket-wr.herokuapp.com/api/login', data)
    // Axios.post('https://foodmarket-wr.herokuapp.com/api/login', form)
    // .then(res => {
    //   console.log('success', res)
    // })
    // .catch(err => {
    //   console.log('error', err)
    // })
    // dispatch(setLoading(true))
    dispatch(signInActions(form, navigation))
  }

  // useEffect(() => {
  //   getData('TOKEN').then((res) => {
  //     console.log('token :', res)
  //     if(res){
  //       navigation.reset({ index: 0, routes: [{ name: 'Main App' }] })
  //     }
  //   })
  // }, [])

  return (
    <View style={styles.root}>
      <HeaderComponent title={'Sign In'} desc={'Find your best over meal'} />

      <View style={styles.form}>
        <TextInputComponent
          label={'Email Address'}
          placeholder='Type your email address'
          value={form.email}
          onChangeText={(newValue) => setForm('email' ,newValue)}
        />
        <TextInputComponent
          label={'Password'}
          placeholder='Type your password'
          value={form.password}
          onChangeText={(newValue) => setForm('password', newValue)}
          secureTextEntry={true}
        />

        <Button label={'Sign in'} onPress={onSubmit} />
        <Button label={'Create New Account'} type='secondary' onPress={() => navigation.navigate('SignUp')} />
      </View>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  form: {
    backgroundColor: colors.white,
    flex: 1,
    marginTop: 20,
    padding: 20
  }
})