import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, StackActions, NavigationActions } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import KeywordsPage from './KeywordsPage'
import TriggerWarning from './TriggerWarning'
import BrowserPage from './Browser'
import Samples from './SamplePages'
import Splash from './splashscreen'

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
  },
  Splash: {
    screen: Splash,
  },
}, {
    initialRouteName: 'Splash',
});

export default createAppContainer(AppNavigator);
