import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import * as constants from "./CONSTANTS"


export default class TriggerWarning extends React.Component {
    render() {
      return (
        <ScrollView style={styles.scrollView, {backgroundColor: constants.mainRed}}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text style ={{marginBottom: 10, fontSize: 40, color: "white"}}>
              Disclaimer
        </Text>

          <Text style ={{marginBottom: 40, color: "white"}}>
              In order for PreCursor to be able to be helpful, we are going to have to ask you some sensitive questions questions about your triggers. Please note that this app won't protect you from all triggerable content, but it will do the best that it can.
          </Text>
          
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
                this.props.navigation.navigate("Keywords")
            }}>
         <Text style = {{color: constants.mainRed}}> I understand </Text>
        </TouchableHighlight>

        </View>
        </ScrollView>

      );
    }  
  }

const styles = StyleSheet.create({
    scrollView: {

    },
    text: {
      fontSize: 42,
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10
      }
  });