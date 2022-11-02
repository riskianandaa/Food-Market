import Axios from 'react-native-axios'
import { showMessage, storeData } from '../../utils'
import { setLoading } from './global'

const BASE_URL = {
  uri: 'https://foodmarket-wr.herokuapp.com/api'
}

export const signUpAction = (dataRegister, photoReducer, navigation) => (dispatch) => {
  Axios.post(`${BASE_URL.uri}/register`, dataRegister)
    .then((res) => {
      console.log('register-success', res.data)

      const token = `${res.data.data.token_type} ${res.data.data.access_token}`
      const profile = res.data.data.user

      // storeData('USER_PROFILE', profile)
      storeData('TOKEN', { value: token })

      if (photoReducer.isUploadPhoto) {
        const photoForUpload = new FormData();
        photoForUpload.append('file', photoReducer)

        Axios.post(`${BASE_URL.uri}/user/photo`, photoForUpload, {
          headers: {
            'Authorization': token,
            // 'Authorization': `${res.data.data.token_type} ${res.data.data.access_token}`,
            'Content-Type': 'multipart/form-data'
          }
        })
          .then((resUpload) => {
            console.log('success upload')
            profile.profile_photo_url = `https://ui-avatars.com/api/${resUpload.data.data[0]}`
            // profile.profile_photo_url = `http://foodmarket-wr.herokuapp.com/storage/${resUpload.data.data[0]}`
            storeData('USER_PROFILE', profile)
            navigation.reset({ index: 0, routes: [{ name: 'SuccessSignUp' }] })
          })
          .catch((err) => {
            showMessage('Upload photo failed ')
            navigation.reset({ index: 0, routes: [{ name: 'SuccessSignUp' }] })
          })
      } else {
        storeData('USER_PROFILE', profile)
        navigation.reset({ index: 0, routes: [{ name: 'SuccessSignUp' }] })
      }
      // dispatch({ type: 'SET_LOADING', value: false })
      dispatch(setLoading(false))
      // showMessage('Register Success', 'success')
    })
    .catch((err) => {
      // console.log('error-register', JSON.stringify(err))
      // dispatch({ type: 'SET_LOADING', value: false })
      dispatch(setLoading(false))
      // showMessage(err?.response?.data?.meta?.message)
    })
}

export const signInActions = (form, navigation) => (dispatch) => {
  dispatch(setLoading(true))
  Axios.post(`${BASE_URL.uri}/login`, form)
    .then(res => {
      console.log('success', JSON.stringify(res, null, 2))
      const token = `${res.data.data.token_type} ${res.data.data.access_token}`
      const profile = res.data.data.user
      dispatch(setLoading(false))
      storeData('USER_PROFILE', profile)
      storeData('TOKEN', { value: token })
      navigation.reset({ index: 0, routes: [{ name: 'Main App' }] })
    })
    .catch(err => {
      console.log('error', err)
      dispatch(setLoading(false))
      showMessage(err.response.data.message)
    })
}
