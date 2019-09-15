import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, ScrollView } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import * as constants from "./CONSTANTS"


export default class SamplePages extends React.Component {
    render() {
      return (
        <ScrollView style={styles.scrollView}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text style ={{marginBottom: 10, fontSize: 40}}>
              SafeSpace Sample Pages
        </Text>

          <Button
          style = {styles.button}
            title="Page 1"
            color = {constants.mainButtonColor}
            onPress={() => {
              this.props.navigation.navigate("BrowserPage", {url: "Random URL"})
            }}
          />
          <Button
                    style = {styles.button}
            title="Page 1"
            color = {constants.mainButtonColor}
            onPress={() => {
              this.props.navigation.navigate("BrowserPage", {url: "Random URL"})
            }}
          />

          <Button
                    style = {styles.button}
            title="Page 1"
            color = {constants.mainButtonColor}
            onPress={() => {
              this.props.navigation.navigate("BrowserPage", {url: "Random URL"})
            }}
          />

          <Button
                    style = {styles.button}
            title="Page 1"
            color = {constants.mainButtonColor}
            onPress={() => {
              this.props.navigation.navigate("BrowserPage", {url: "Random URL"})
            }}
          />

          <Button
                    style = {styles.button}
            title="Page 1"
            color = {constants.mainButtonColor}
            onPress={() => {
              this.props.navigation.navigate("BrowserPage", {url: "Random URL"})
            }}
          />

          <Button
                    style = {styles.button}
            title="Page 1"
            color = {constants.mainButtonColor}
            onPress={() => {
              this.props.navigation.navigate("BrowserPage", {url: "Random URL"})
            }}
          />

          <Button
                    style = {styles.button}
            title="Page 1"
            color = {constants.mainButtonColor}
            onPress={() => {
              this.props.navigation.navigate("BrowserPage", {url: "Random URL"})
            }}
          />

          <Button
                    style = {styles.button}
            title="Page 1"
            color = {constants.mainButtonColor}
            onPress={() => {
              this.props.navigation.navigate("BrowserPage", {url: "Random URL"})
            }}
          />

          <Button
                    style = {styles.button}
            title="Page 1"
            color = {constants.mainButtonColor}
            onPress={() => {
              this.props.navigation.navigate("BrowserPage", {url: "Random URL"})
            }}
          />

          <Button
                    style = {styles.button}
            title="Page 1"
            color = {constants.mainButtonColor}
            onPress={() => {
              this.props.navigation.navigate("BrowserPage", {url: "Random URL"})
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