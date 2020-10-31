import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// Navigation components
import { NavigationContainer } from '@react-navigation/native';
import { default as MainTabNavigator } from './js/navigation/MainTabNavigator';
import { navigationRef } from './js/navigation/RootNavigation';
import { Trans, t } from '@lingui/macro';

import HomeScreen from './js/screens/HomeScreen';

// Lingui, i18n
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';

import './js/lib/i18n';


// The app component
export default function App() {
  return (
    <I18nProvider i18n={i18n}>
      <View style={styles.container}>
        <Text><Trans>Top stuff</Trans></Text>
        <NavigationContainer ref={navigationRef}>
          <MainTabNavigator />
        </NavigationContainer>
      </View >
    </I18nProvider>
  );
} // App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555',
    padding: 40,
  },
});
