import Axios from "react-native-axios"
import BASE_URL from "../../config/base-url"

export const getFoodData = () => (dispatch) => {
  Axios.get(`${BASE_URL.DEV}/food`)
    .then((res) => {
      // console.log('res :', JSON.stringify(res.data.data.data, null, 2))
      dispatch({ type: 'SET_FOOD', value: res.data.data.data })
    })
    .catch((err) => {
      console.log('error', err)
    })
}

export const getFoodDataByType = (types) => (dispatch) => {
  Axios.get(`${BASE_URL.DEV}/food?types=${types}`)
    .then((res) => {
      console.log('res-type :', JSON.stringify(res.data.data.data, null, 2))
      if (types === 'new_taste') {
        dispatch({ type: 'SET_NEW_TASTE', value: res.data.data.data })
      }
      if (types === 'popular') {
        dispatch({ type: 'SET_POPULAR', value: res.data.data.data })
      }
      if (types === 'recommended') {
        dispatch({ type: 'SET_RECOMMENDED', value: res.data.data.data })
      }
    })
    .catch((err) => {
      console.log('error', err)
    })
}
