import { StyleSheet, Text, View, useWindowDimensions, ScrollView, Alert } from 'react-native'
import React from 'react'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { fonts } from '../../../utils'
import ItemListFood from '../item-list-food';
import { useNavigation } from '@react-navigation/native';
import ListItemProfile from '../list-item-profile';
import AsyncStorage from '@react-native-async-storage/async-storage';

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


const Account = () => {
  const navigation = useNavigation()
  const signOut = () => {
    AsyncStorage.multiRemove(['USER_PROFILE', 'TOKEN']).then(() => {
      navigation.reset({ index: 0, routes: [{ name: 'SignIn' }] })
    })
  }

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
      <ListItemProfile label={'Edit Profile'} onPress={() => { Alert.alert('tes', ' ini adalah onpress')}} />      
      <ListItemProfile label={'Home Address'} onPress={() => { Alert.alert('tes', ' ini adalah onpress')}} />      
      <ListItemProfile label={'Security'} onPress={() => { Alert.alert('tes', ' ini adalah onpress')}} />      
      <ListItemProfile label={'Payments'} onPress={() => { Alert.alert('tes', ' ini adalah onpress')}} />     
      <ListItemProfile label={'Sign Out'} onPress={signOut} />      
    </ScrollView>
  )
};

const FoodMarket = () => {
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
      <ListItemProfile label={'Rate App'} onPress={() => { Alert.alert('tes', ' ini adalah onpress')}} />      
      <ListItemProfile label={'Help Center'} onPress={() => { Alert.alert('tes', ' ini adalah onpress')}} />      
      <ListItemProfile label={'Privacy & policy'} onPress={() => { Alert.alert('tes', ' ini adalah onpress')}} />      
      <ListItemProfile label={'Term & Conditions'} onPress={() => { Alert.alert('tes', ' ini adalah onpress')}} />      
    </ScrollView>
  )
}

const renderScene = SceneMap({
  first: Account,
  second: FoodMarket,
});

const ProfileTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Account' },
    { key: 'second', title: 'Food Market' },
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

export default ProfileTabSection

const styles = StyleSheet.create({})