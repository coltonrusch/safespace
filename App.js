import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, StackActions, NavigationActions } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import KeywordsPage from './KeywordsPage'
import TriggerWarning from './TriggerWarning'

const AppNavigator = createStackNavigator({
  Keywords: {
    screen: KeywordsPage,
  },
  Warning: {
    screen: TriggerWarning,
  }
}, {
    initialRouteName: 'Warning',
});

export default createAppContainer(AppNavigator);