import { StyleSheet, Text, View, useWindowDimensions, ScrollView } from 'react-native'
import React from 'react'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { fonts } from '../../../utils'
import ItemListFood from '../item-list-food';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getFoodDataByType } from '../../../redux/actions/home';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
      // borderRadius: 10,
      // width: '5%',
      // marginLeft: '3%'
    }}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#F2F2F2',
      borderBottomWidth: 1
    }}
    tabStyle={{ width: 'auto' }}
    renderLabel={({ route, focused, color }) => (
      <Text style={{
        fontFamily: fonts.primary[400],
        color: focused ? '#020202' : '#8D92A4'
      }}>
        {route.title}
      </Text>
    )}
  />
);


const NewTaste = () => {
  const navigation = useNavigation()
  const { newTaste } = useSelector(state => state.homeReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFoodDataByType('new_taste'))
  }, [])

  return (
    <ScrollView
      style={{
        paddingTop: 12,
        paddingHorizontal: 20,
      }}
      contentContainerStyle={{
        paddingBottom: 30,
      }}
      showsVerticalScrollIndicator={false}
    >
      {newTaste.map((itemTaste) => {
        return (
          <ItemListFood
            key={itemTaste.id}
            type='product'
            ratings={itemTaste.rate}
            name={itemTaste.name}
            price={itemTaste.price}
            image={{ uri: itemTaste.picturePath }}
            onPress={() => { navigation.navigate('FoodDetail') }}
          />
        )
      })}
    </ScrollView>
  )
};

const Popular = () => {
  const navigation = useNavigation()
  const { popular } = useSelector(state => state.homeReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFoodDataByType('popular'))
  }, [])

  return (
    <ScrollView
      style={{
        paddingTop: 12,
        paddingHorizontal: 20,
      }}
      contentContainerStyle={{
        paddingBottom: 30,
      }}
      showsVerticalScrollIndicator={false}
    >
      {popular.map((item) => {
        return (
          <ItemListFood
            key={item.id}
            type='product'
            ratings={item.rate}
            name={item.name}
            price={item.price}
            image={{ uri: item.picturePath }}
            onPress={() => { navigation.navigate('FoodDetail', item) }}
          />
        )
      })}
    </ScrollView>
  )
}

const Recommended = () => {
  const navigation = useNavigation()
  const { recommended } = useSelector(state => state.homeReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFoodDataByType('recommended'))
  }, [])

  return (
    <ScrollView
      style={{
        paddingTop: 12,
        paddingHorizontal: 20,
      }}
      contentContainerStyle={{
        paddingBottom: 30,
      }}
      showsVerticalScrollIndicator={false}
    >
      {recommended.map((item) => {
        return (
          <ItemListFood
            key={item.id}
            type='product'
            ratings={item.rate}
            name={item.name}
            price={item.price}
            image={{ uri: item.picturePath }}
            onPress={() => { navigation.navigate('FoodDetail', item) }}
          />
        )
      })}
    </ScrollView>
  )
}

const renderScene = SceneMap({
  first: NewTaste,
  second: Popular,
  third: Recommended,
});

const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'New Taste' },
    { key: 'second', title: 'Popular' },
    { key: 'third', title: 'Recommended' }
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
      style={{ backgroundColor: 'white' }}
    />
  )
}

export default HomeTabSection

const styles = StyleSheet.create({})