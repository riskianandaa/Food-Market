import { StyleSheet, Text, View, ScrollView, NativeSyntheticEvent, NativeScrollEvent, LayoutAnimation } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { Button, Gap, HeaderComponent, ItemListFood, TextValueHorizontal } from '../../components'
import { SafeAreaView } from 'react-native-safe-area-context'

const OrderDetails = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.root} >
      <ScrollView style={styles.root} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
        <HeaderComponent type='back' title={'Payment'} desc='Your deserve better meal' onPress={() => { navigation.goBack() }} />
        <View style={styles.containerOrder}>
          <Text style={styles.title}>Item Ordered</Text>
          <Gap height={10} width={0} />
          <ItemListFood type={'order-summary'} name={'Sop Bumil'} items={14} price={'289.000'} />

          <Text style={styles.title}>Details Transaction</Text>
          <TextValueHorizontal label={'Cherry Helathy'} value={'IDR 18.390.000'} />
          <TextValueHorizontal label={'Driver'} value={'IDR 50.000'} />
          <TextValueHorizontal label={'Tax 10%'} value={'IDR 1.800.000'} />
          <TextValueHorizontal label={'Total Price'} value={'IDR 390.803.000'} type='amount' />
        </View>
        <View style={styles.containerOrder}>
          <Text style={styles.title}>Driver to:</Text>
          <TextValueHorizontal label={'Name'} value={'Angga Risky'} />
          <TextValueHorizontal label={'Phone No.'} value={'0822 0819 9688'} />
          <TextValueHorizontal label={'Address'} value={'Setra Duta Palima'} />
          <TextValueHorizontal label={'Hosue No.'} value={'A5 Hook'} />
          <TextValueHorizontal label={'City'} value={'Bandung'} />
        </View>
        <View style={styles.containerOrder}>
          <Text style={styles.title}>Order Status:</Text>
          <TextValueHorizontal label={'#FM209391'} value={'Paid'} type='amount' />
        </View>
      </ScrollView>
      <View style={{ paddingHorizontal: 20 }}>
        <Button type={'secondary'} label='Cancel My Order' onPress={() => { navigation.navigate('SuccessOrder') }} />
      </View>
    </SafeAreaView>
  )
}

export default OrderDetails

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