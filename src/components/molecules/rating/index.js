import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconStar, IconStarOf } from '../../../assets/Icons'
import Number from '../number'

const Ratings = ({ number }) => {
  let star = []
  const renderStar = () => {
    for(let i=1; i<=5; i++){
      if(i <= number) {
        star.push(<IconStar key={i} />)
      } else {
        star.push(<IconStarOf key={i} />)
      }
    }
    return star;
  }

  return (
    <View style={styles.rating}>
      {renderStar()}
      {/* <Text style={{ marginLeft: 5}}>{number}</Text> */}
      <Number number={number} type='decimal' />
    </View>
  )
}

export default Ratings

const styles = StyleSheet.create({
  rating: {
    alignItems: 'center',
    flexDirection: 'row'
  }
})