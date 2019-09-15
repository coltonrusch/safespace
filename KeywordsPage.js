import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, ScrollView } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import * as constants from "./CONSTANTS"
import AsyncStorage from '@react-native-community/async-storage';

export default class KeywordsPage extends React.Component {
    state = {input1: "", input2: ""}

    render() {
      return (
        <ScrollView style={styles.scrollView}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text style ={{marginBottom: 10, fontSize: 40}}>
              SafeSpace
        </Text>

          <Text style ={{marginBottom: 40}}>
              Please select the keywords that make you uncomfortable
          </Text>

          <Text style ={{marginBottom: 10}}>
              Concepts
          </Text>
          <TextInput
            style = {{borderRadius: 4,borderWidth: 0.5, borderColor: '#d6d7da', width: "80%", marginBottom: 30}}
            multiline
            numberOfLines={6}
            editable
            onChangeText={(text) => this.setState(previousState => (
        {input1: text }))}
            />

            <Text style ={{marginBottom: 10}}>
              Specific Words (like names)
            </Text>
          <TextInput
            style = {{borderRadius: 4,borderWidth: 0.5, borderColor: '#d6d7da', width: "80%", marginBottom: 30}}
            multiline
            numberOfLines={6}
            editable
            onChangeText={(text) => this.setState(previousState => (
        {input2: text }))}
            />

          <Button
            title="Next"
            color = {constants.mainButtonColor}
            onPress={ this.storeData }
          />
        </View>
        </ScrollView>

      );
    }
    storeData = () => {
    try {
      AsyncStorage.setItem('@Concepts', this.state.input1)
      AsyncStorage.setItem('@Specifics', this.state.input2)
      this.props.navigation.navigate("BrowserPage")
      } catch (e) {
      // saving error
    }
  }
}

const styles = StyleSheet.create({
    scrollView: {
      marginHorizontal: 10,
    },
    text: {
      fontSize: 42,
    },
  });
