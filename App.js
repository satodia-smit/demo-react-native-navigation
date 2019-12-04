import React from 'react';


import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import HamburgerIcon from './components/HamburgerIcon';
import Home_Screen from './screens/Home_Screen';
import Settings_Screen from './screens/Settings_Screen';
import Student_Screen from './screens/Student_Screen';
import Details_Screen from './screens/Details_Screen';


export const Tab_1 = createMaterialTopTabNavigator(
  {
    First: {
      screen: Home_Screen,
    },
    Second: {
      screen: Settings_Screen,
    },
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: '#fff',
      pressColor: '#004D40',
      inactiveTintColor: '#fff',
      style: {
        backgroundColor: '#ff0000',
      },

      labelStyle: {
        fontSize: 16,
        fontWeight: '200',
      },
    },
  },
);

export const Tab_2 = createMaterialTopTabNavigator(
  {
    Third: {
      screen: Student_Screen,
    },
    Forth: {
      screen: Details_Screen,
    },
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: '#fff',
      pressColor: '#004D40',
      inactiveTintColor: '#fff',
      style: {
        backgroundColor: '#00B8D4',
      },

      labelStyle: {
        fontSize: 16,
        fontWeight: '200',
      },
    },
  },
);

const First_2_Tabs = createStackNavigator({
  First: {
    screen: Tab_1,
    navigationOptions: ({navigation}) => ({
      title: 'First Screen',

      headerLeft: <HamburgerIcon navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#ff0000',
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
      },
      headerTintColor: '#fff',
    }),
  },
});

const Second_2_Tabs = createStackNavigator({
  First: {
    screen: Tab_2,
    navigationOptions: ({navigation}) => ({
      title: 'Second Screen',
      headerLeft: <HamburgerIcon navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#00B8D4',
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
      },
      headerTintColor: '#fff',
    }),
  },
});

const MyDrawerNavigator = createDrawerNavigator({
  Home_Menu_Label: {
    title: ' home',
    screen: First_2_Tabs,
  },

  Student_Menu_Label: {
    screen: Second_2_Tabs,
  },
});

export default createAppContainer(MyDrawerNavigator);
