import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SignIn, SignUp, SplashScreen, Address, SuccessOrder, Home, OrderFood, Profile, SuccessSignUp, FoodDetail, Payment, OrderDetails } from '../pages';
import { BottomNavigator } from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false
      }}
      tabBar={props => <BottomNavigator {...props} />}
    >
      <Tab.Screen
        name='Home'
        component={Home}
      />
      <Tab.Screen
        name='Order Food'
        component={OrderFood}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
      />
    </Tab.Navigator>
  )
}

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        // ...TransitionPresets.SlideFromRightIOS,
        gestureEnabled: true,
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name='SplashScreen'
        component={SplashScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='SignIn'
        component={SignIn}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='SignUp'
        component={SignUp}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='SuccessSignUp'
        component={SuccessSignUp}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='Address'
        component={Address}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='SuccessOrder'
        component={SuccessOrder}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='Main App'
        component={MainApp}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='FoodDetail'
        component={FoodDetail}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='Payment'
        component={Payment}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='OrderDetails'
        component={OrderDetails}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

export default Router