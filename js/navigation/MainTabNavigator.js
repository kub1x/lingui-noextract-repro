import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useLingui } from '@lingui/react';
import { t } from '@lingui/macro';

import HomeScreen from '../screens/HomeScreen';

const RouteNames = {
  HOME: 'Home',
};

const Tab = createBottomTabNavigator();

function tabScreenOptions({ route }) {
  let tabBarLabel = '';
  switch (route.name) {
    case RouteNames.HOME:
      tabBarLabel = t`Domů`;
      break;
  }

  return {
    tabBarLabel,
    style: { padding: 0 },
  };
}

function MainTabNavigator() {
  // useLingui();
  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      <Tab.Screen name={RouteNames.HOME} component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default MainTabNavigator;
