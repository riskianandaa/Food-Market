import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ratings from '../rating'
import { colors, fonts } from '../../../utils'
import Number from '../number'


/* 
  TYPE: 
  1. product
  2. order-summary
  3. inProgress
  4. past order
*/

const ItemListFood = ({ onPress, items, ratings, price, type, name, date, status, image }) => {
  const renderContent = () => {
    switch (type) {
      case 'product':
        return (
          <>
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.nameFood}>{name}</Text>
              <Number number={price} />
              {/* <Text style={styles.price}>IDR{price}</Text> */}
            </View>
            <Ratings number={ratings} />
          </>
        )
        break;
      case 'order-summary':
        return (
          <>
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.nameFood}>{name}</Text>
              <Number number={price} />
              {/* <Text style={styles.price}>IDR {price}</Text> */}
            </View>
            <Text>{items} items</Text>
          </>
        )
        break;
      case 'inProgress':
        return (
          <>
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.nameFood}>{name}</Text>
              <Text>{items} items.IDR {price}</Text>
            </View>
          </>
        )
        break;
      case 'past-order':
        return (
          <>
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.nameFood}>{name}</Text>
              <Text>{items} items.IDR {price}</Text>
            </View>
            <View>
              <Text style={styles.dateStyle}>{date}</Text>
              <Text style={styles.statusStyle}>{status}</Text>
            </View>
          </>
        )
        break;
      default:
        //item product
        return (
          <>
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.nameFood}>{name}</Text>
              <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Ratings number={ratings} />
          </>
        )
    }
  }

  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container} onPress={onPress}>
      <Image
        source={image}
        style={styles.picture}
      />
      {renderContent()}
      {/* // codingan pertama sebelum logis menggunakan switsh */}
      {/* <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={styles.nameFood}>{name}</Text>
        {
          InProgress ?
            <Text>{items} items . IDR {price}</Text>
            :
            <Text style={styles.price}>IDR 289.000</Text>
        }
      </View>
      {items && !ratings && <Text>{items} items</Text>}
      {ratings && !items && <Ratings />} */}
    </TouchableOpacity>
  )
}

// props in progress disitu bisa type boolean

export default ItemListFood

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  picture: {
    height: 80,
    width: 80,
    borderRadius: 20,
    marginRight: 8
  },
  nameFood: {
    fontFamily: fonts.primary[600],
    color: colors.black,
    fontSize: 18
  },
  price: {
    fontFamily: fonts.primary[400],
    fontSize: 14
  },
  dateStyle: {
    fontFamily: fonts.primary[400],
    fontSize: 14
  },
  statusStyle: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.red
  }
})
