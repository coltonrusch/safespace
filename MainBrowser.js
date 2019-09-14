import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import * as constants from "./CONSTANTS"
import BrowserComponent from "./Browser"


export default class MainBrowser extends React.Component {
    render() {
      return (
        <BrowserComponent />

      );
    }  
  }
