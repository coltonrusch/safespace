import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, ScrollView } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import * as constants from "./CONSTANTS"


export default class SamplePages extends React.Component {
    render() {

      let words = this.props.navigation.getParam("words", []);

      return (
        <ScrollView style={styles.scrollView}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text style ={{marginBottom: 10, fontSize: 40}}>
              PreCursor Sample Pages
        </Text>

          <Button
          style = {styles.button}
            title="Fruits"
            color = {constants.mainButtonColor}
            onPress={() => {
              this.props.navigation.navigate("BrowserPage", {url: "https://en.wikipedia.org/wiki/Fruit", words: words})
            }}
          />
          
          <Button
            style = {styles.button}
            title="PMs of Canada"
            color = {constants.mainButtonColor}
            onPress={() => {
              this.props.navigation.navigate("BrowserPage", {url: "https://en.wikipedia.org/wiki/List_of_prime_ministers_of_Canada", words: ["Justin"]})
            }}
          />
        </View>
        </ScrollView>

      );
    }  
  }

const styles = StyleSheet.create({
    scrollView: {
      marginHorizontal: 10,
    },
    text: {
      fontSize: 42,
    },
    button: {
      marginBottom: 15
    }
  });