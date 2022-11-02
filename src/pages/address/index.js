import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, showMessage } from '../../utils'
import { Button, HeaderComponent, TextInput } from '../../components'
import useForm from '../../utils/useForm'
import { useDispatch, useSelector } from 'react-redux'
import Axios from 'react-native-axios'
import { setLoading, signUpAction } from '../../redux/actions'


const Address = ({ navigation }) => {
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: ''
  })

  const dispatch = useDispatch()
  const { registerReducer, photoReducer } = useSelector((state) => state);

  const onSubmit = () => {
    console.log('form-address:', form)
    const data = {
      ...form,
      ...registerReducer
    }
    // dispatch({ type: 'SET_ADDRESS', value: form })
    console.log('data-register', data)
    // dispatch({ type: 'SET_LOADING', value: true })
    dispatch(setLoading(true));
    dispatch(signUpAction(data, photoReducer, navigation));
    // Axios.post('https://foodmarket-wr.herokuapp.com/api/register', data)
    //   .then((res) => {
    //     console.log('register-success', res.data)
    //     if (photoReducer.isUploadPhoto) {
    //       const photoForUpload = new FormData();
    //       photoForUpload.append('file', photoReducer)

    //       Axios.post('https://foodmarket-wr.herokuapp.com/api/user/photo', photoForUpload, {
    //         headers: {
    //           'Authorization': `${res.data.data.token_type} ${res.data.data.access_token}`,
    //           'Content-Type': 'multipart/form-data'
    //         }
    //       })
    //         .then((resUpload) => {
    //           console.log('success upload')
    //         })
    //         .catch((err) => {
    //           showMessage('Upload photo failed ')
    //         })
    //     }
    //     // dispatch({ type: 'SET_LOADING', value: false })
    //     dispatch(setLoading(false))
    //     // showMessage('Register Success', 'success')
    //     navigation.navigate('SuccessSignUp')
    //   })
    //   .catch((err) => {
    //     // console.log('error-register', JSON.stringify(err))
    //     // dispatch({ type: 'SET_LOADING', value: false })
    //     dispatch(setLoading(false))
    //     // showMessage(err?.response?.data?.meta?.message)
    //   })
  }

  return (
    <View style={styles.root}>
      <HeaderComponent type={'back'} title='Address' desc={'Make sure it valid'} onPress={() => { navigation.goBack() }} />
      <View style={styles.container}>
        <TextInput
          label={'Phone No.'}
          placeholder='Type your phone number'
          value={form.phoneNumber}
          onChangeText={(newValue => setForm('phoneNumber', newValue))}
        />
        <TextInput
          label={'Address'}
          placeholder='Type your address'
          value={form.address}
          onChangeText={(newValue) => setForm('address', newValue)}
        />
        <TextInput
          label={'House No.'}
          placeholder='Type your house no'
          value={form.houseNumber}
          onChangeText={(newValue) => setForm('houseNumber', newValue)}
        />
        <TextInput
          label={'City'}
          placeholder='Select your city'
          value={form.city}
          onChangeText={(newValue) => setForm('city', newValue)}
        />
        <Button label={'Sign up now'} onPress={onSubmit} type='secondary' />
      </View>
    </View>
  )
}

export default Address

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: colors.white,
    padding: 20
  }
})