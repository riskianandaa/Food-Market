import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import EmptyOrder from '../../components/molecules/empty-order'
import { HeaderComponent, OrderTabSection } from '../../components'
import { colors } from '../../utils'

const OrderFood = () => {
  const [isEmptyOrder, setIsEmptyOrder] = useState(false)
  return (
    <View style={styles.root}>
      { isEmptyOrder ? <EmptyOrder /> : 
        <View style={styles.root}>
          <HeaderComponent title={'Your Orders'} desc={'Waiit for the best meal'} />
          <View style={styles.container}>
            <OrderTabSection />
          </View>
        </View>
      }
    </View>
  )
}

export default OrderFood

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  container: {
    marginTop: 20,
    flex: 1, 
    backgroundColor: colors.white
  }
})