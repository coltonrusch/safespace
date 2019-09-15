import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, StackActions, NavigationActions } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import KeywordsPage from './KeywordsPage'
import TriggerWarning from './TriggerWarning'
import BrowserPage from './Browser'
import Samples from './SamplePages'

const AppNavigator = createStackNavigator({
  Keywords: {
    screen: KeywordsPage,
  },
  Warning: {
    screen: TriggerWarning,
  },
  BrowserPage: {
    screen: BrowserPage,
  },
  SamplePages: {
    screen: Samples,
  }
}, {
    initialRouteName: 'Warning',
});

export default createAppContainer(AppNavigator);
