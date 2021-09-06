import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from '../screens/MainScreen';
import PastScreen from '../screens/PastScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();
const isFocused = 'red';
const isNotFocused = '#D3D3D3';

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          ...styles.tabBarStyle,
        },
      }}>
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome5
              name={'home'}
              size={responsiveFontSize(3)}
              style={{color: focused ? isFocused : isNotFocused}}
            />
          ),
          tabBarLabelStyle: {
            ...styles.tabBarLabel,
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: '#D3D3D3',
        }}
      />
      <Tab.Screen
        name="Past"
        component={PastScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome5
              name={'clipboard-list'}
              size={responsiveFontSize(3)}
              style={{color: focused ? isFocused : isNotFocused}}
            />
          ),
          tabBarLabelStyle: {
            ...styles.tabBarLabel,
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: '#D3D3D3',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome5
              name={'user-cog'}
              size={responsiveFontSize(3)}
              style={{color: focused ? isFocused : isNotFocused}}
            />
          ),
          tabBarLabelStyle: {
            ...styles.tabBarLabel,
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: '#D3D3D3',
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    bottom: responsiveScreenHeight(3),
    left: responsiveScreenWidth(4),
    right: responsiveScreenWidth(4),
    backgroundColor: 'white',
    borderRadius: 15,
    height: responsiveScreenHeight(9),
    shadowColor: '#7f5df0',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    paddingVertical: responsiveFontSize(0.5),
  },
  tabBarLabel: {
    fontSize: responsiveFontSize(1.5),
    paddingBottom: responsiveFontSize(1),
  },
});

export default Tabs;
