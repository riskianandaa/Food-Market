import { StyleSheet, Text, View, useWindowDimensions, ScrollView } from 'react-native'
import React from 'react'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { fonts } from '../../../utils'
import ItemListFood from '../item-list-food';
import { useNavigation } from '@react-navigation/native';

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


const InProgress = () => {
  const navigation = useNavigation()
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
      <ItemListFood onPress={() => { navigation.navigate('OrderDetails') }} InProgress OrderItems={3} totalOrder={'18.000.000'} type='inProgress' name={'Sop Bumil'} items={3} price={'18.000.000'} />
      
    </ScrollView>
  )
};

const PastOrder = () => {
  const navigation = useNavigation()

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
      <ItemListFood onPress={() => { navigation.navigate('OrderDetails') }} InProgress OrderItems={3} totalOrder={'18.000.000'} type='past-order' name={'Sop Bumil'} date={'Jun 12, 14:00'} items={1} price={'289.000'} status='' />
    </ScrollView>
  )
}

const renderScene = SceneMap({
  first: InProgress,
  second: PastOrder,
});

const OrderTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'In Progress' },
    { key: 'second', title: 'Past Orders' },
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

export default OrderTabSection

const styles = StyleSheet.create({})