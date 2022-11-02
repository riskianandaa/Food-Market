import { ScrollView, StyleSheet, Text, View, useWindowDimensions, Image, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, fonts } from '../../utils'
import { HeaderComponent, HomeTabSection, ItemFoods } from '../../components'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFoodData } from '../../redux/actions/home'
import { EmptyState } from '../../assets/Icons'

const Home = ({ navigation }) => {
  const dispatch = useDispatch()
  const { food } = useSelector(state => state.homeReducer)

  useEffect(() => {
    dispatch(getFoodData())
  }, [])

  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={styles.root}
    >
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <HeaderComponent title={'FoodMarket'} desc={`Let's get home foods`} type='profile' />
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.flex}
            contentContainerStyle={{ paddingVertical: 20, flexGrow: 1, marginHorizontal: 20 }}
          >
            <View style={{ flexDirection: 'row', marginEnd: 20 }}>

              {food.map((dataFood) => {
                return (
                  // <>
                    <ItemFoods
                      key={dataFood.id}
                      name={dataFood.name}
                      image={{ uri: dataFood.picturePath }}
                      ratings={dataFood.rate}
                      onPress={() => { navigation.navigate('FoodDetail', dataFood) }}
                    />
                  // {/* </> */}
                )
              })}

            </View>
          </ScrollView>
        </View>

        <View style={styles.containerFoodAll}>
          <HomeTabSection />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  containerScrollViewStyle: {
    flexGrow: 1,
  },
  flex: {
    flex: 1
  },
  containerFoodAll: {
    flex: 1,
    backgroundColor: colors.white
  }
})