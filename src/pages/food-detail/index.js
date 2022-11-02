import { useWindowDimensions, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, fonts, getData } from '../../utils'
import { IconBackWhite } from '../../assets/Icons';
import { Button, Number, Quantity, Ratings } from '../../components';
import { useState, useEffect } from 'react';


const FoodDetail = ({ navigation, route }) => {
  const { name, picturePath, rate, description, ingredients, price, id } = route.params;
  const [totalItem, setTotalItem] = useState(1)
  const [userProfile, setUserProfile] = useState({})

  useEffect(() => {
    getData('USER_PROFILE').then( res => {
      setUserProfile(res)
    })
  },[])

  const layout = useWindowDimensions();
  const imageBackgroundStyle = {
    height: layout.height / 2,
    width: layout.width,
    resizeMode: 'contain',
    padding: 20
  }

  const counterChange = (value) => {
    console.log('counter', value)
    setTotalItem(value)
  }

  const onOrder = () => {
    const totalPrice = totalItem * price 
    const driver = 50000
    const tax = 10 / 100 * totalPrice
    const total = totalPrice + driver + tax

    const data = {
      item: {
        id,
        name,
        price,
        picturePath,
      },
      transaction: {
        totalItem,
        totalPrice, 
        driver,
        tax,
        total
      },
      userProfile
    }
    console.log('data for checkout', JSON.stringify(data, null, 2))
    navigation.navigate('Payment', data)
  }

  return (
    <View style={styles.root}>
      <ImageBackground
        source={{ uri: picturePath }}
        style={imageBackgroundStyle}
      >
        <TouchableOpacity activeOpacity={0.8} onPress={() => { navigation.goBack() }} style={styles.back}>
          <IconBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.container}>
        <View style={styles.containerHeadline}>
          <View>
            <Text>{name}</Text>
            <Ratings number={rate} />
          </View>
          <Quantity onValueChange={counterChange} />
        </View>
        <Text style={{ marginTop: 10, lineHeight: 20, fontSize: 14 }}>
          {description}
        </Text>
        <Text style={{ fontSize: 16, color: colors.black, fontFamily: fonts.primary[600], marginTop: 10 }}>
          Ingredients:
        </Text>
        <Text style={{ marginTop: 10, lineHeight: 20, fontSize: 14 }}>
          {ingredients}
        </Text>
      </View>
      <View style={styles.containerStickyHeader}>
        <View style={styles.containerChildrenStickyHeader}>
          <Text>Total Price</Text>
          <Number number={totalItem * price} style={styles.priceStyle} />
        </View>
        <Button label={'Order Now'} type='secondary' onPress={onOrder} />
      </View>
    </View>
  )
}

export default FoodDetail

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
  back: {
    height: 36,
    width: 36,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -20,
    padding: 20
  },
  containerHeadline: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  containerStickyHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  containerChildrenStickyHeader: {
    flex: 1
  },
  priceStyle: {
    fontFamily: fonts.primary[600],
    color: colors.black,
    fontSize: 18
  }
})