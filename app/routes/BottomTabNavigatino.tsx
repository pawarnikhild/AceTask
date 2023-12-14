import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Foundation from 'react-native-vector-icons/Foundation';
import Octicons from 'react-native-vector-icons/Octicons';

import CategoriesScreen from '../models/CategoriesScreen';
import AddCategoriesScreen from '../models/AddCategoriesScreen';

import {AppColor, FontSize} from '../utils/StyleConstants';

const Tab = createBottomTabNavigator();

const BottomTabNavigatino = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{headerShown: false, tabBarStyle: styles.tabBar}}>
        <Tab.Screen
          name="View"
          component={CategoriesScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Foundation
                name="info"
                size={28}
                color={focused ? AppColor.lightBlue : AppColor.grey}
              />
            ),
            tabBarLabelStyle: styles.tabBarTitle,
          }}
        />
        <Tab.Screen
          name="Add New"
          component={AddCategoriesScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Octicons
                name="check-circle-fill"
                size={22}
                color={focused ? AppColor.lightBlue : AppColor.grey}
              />
            ),
            tabBarLabelStyle: styles.tabBarTitle,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigatino;

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarTitle: {
    fontSize: FontSize.medium,
    fontFamily: 'Montserrat Regular',
    marginBottom: 10,
  },
});
