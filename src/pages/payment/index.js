import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Button, Gap, HeaderComponent, ItemListFood, LoadingIndicator, TextValueHorizontal } from '../../components'
import { colors, fonts, getData } from '../../utils'
import { SafeAreaView } from 'react-native-safe-area-context'
import Axios from 'react-native-axios'
import BASE_URL from '../../config/base-url'
import WebView from 'react-native-webview';

const Payment = ({ navigation, route }) => {
  const { item, transaction, userProfile } = route.params

  const [token, setToken] = useState('')
  const [isPaymentOpen, setIsPaymentOpen] = useState(false)
  const [paymentUrl, setPaymentUrl] = useState('https://google.com')

  useEffect(() => {
    getData('TOKEN').then(res => {
      console.log('token :', JSON.stringify(res, null, 2))
      setToken(res.value)
    })
  }, [])

  const onCheckOut = () => {
    const data = {
      food_id: item.id,
      user_id: userProfile.id,
      quantity: transaction.totalItem,
      total: transaction.total,
      status: 'Cancel'
    }
    Axios.post('https://foodmarket-wr.herokuapp.com/api/checkout', data, {
      headers: {
        'Authorization': token,
        // 'Content-Type': 'multipart/form-data'
      }
    })
      .then((res) => {
        console.log('checkout success', JSON.stringify(res.data, 2, null))
        setIsPaymentOpen(true)
        setPaymentUrl(res.data.data.payment_url)
      })
      .catch((err) => {
        console.log('checkout gagal', JSON.stringify(err, 2, null))
      })

  }

  const onNavChange = (state) => {
    console.log("nav:", state)
    const urlSuccess = 'http://foodmarket-wr.herokuapp.com/'
    const title = 'Laravel'
    if (state.url === title) {
      navigation.replace('SuccessOrder')
    }
  }

  if (isPaymentOpen) {
    return (
      <>
        <HeaderComponent type='back' title={'Payment'} desc='Your deserve better meal' onPress={() => { navigation.goBack() }} />
        <WebView
          source={{ uri: paymentUrl }}
          onNavigationStateChange={onNavChange}
          startInLoadingState={true}
          renderLoading={() => <LoadingIndicator />}
        />
      </>
    );
  }

  return (
    <SafeAreaView style={styles.root} >
      <ScrollView style={styles.root} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
        <HeaderComponent type='back' title={'Order summary'} desc='Your deserve better meal' onPress={() => { navigation.goBack() }} />
        <View style={styles.containerOrder}>
          <Text style={styles.title}>Item Ordered</Text>
          <Gap height={10} width={0} />
          <ItemListFood type={'order-summary'} key={item.id} name={item.name} items={transaction.totalItem} price={item.price} image={{ uri: item.picturePath }} />

          <Text style={styles.title}>Details Transaction</Text>
          <TextValueHorizontal label={item.name} value={transaction.totalPrice} type='currency' />
          <TextValueHorizontal label={'Driver'} value={transaction.driver} type='currency' />
          <TextValueHorizontal label={'Tax 10%'} value={transaction.tax} type='currency' />
          <TextValueHorizontal label={'Total Price'} value={transaction.total} type='currency' valueColor={colors.green} />
        </View>
        <View style={styles.containerOrder}>
          <Text style={styles.title}>Driver to:</Text>
          <TextValueHorizontal label={'Name'} value={userProfile.name} />
          <TextValueHorizontal label={'Phone No.'} value={userProfile.phoneNumber} />
          <TextValueHorizontal label={'Address'} value={userProfile.address} />
          <TextValueHorizontal label={'House No.'} value={userProfile.houseNumber} />
          <TextValueHorizontal label={'City'} value={userProfile.city} />
        </View>

      </ScrollView>
      <View style={{ paddingHorizontal: 20 }}>
        <Button type={'secondary'} label='Checkout Now' onPress={onCheckOut} />
      </View>
    </SafeAreaView>
  )
}

export default Payment

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  containerOrder: {
    marginTop: 20,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 16
  },
  title: {
    fontFamily: fonts.primary[500],
    color: colors.black,
    fontSize: 16
  }
})