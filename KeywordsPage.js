import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, ScrollView } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import * as constants from "./CONSTANTS"


export default class KeywordsPage extends React.Component {
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
            />

            <Text style ={{marginBottom: 10}}>
              Specific Words (like names)
            </Text>
          <TextInput
            style = {{borderRadius: 4,borderWidth: 0.5, borderColor: '#d6d7da', width: "80%", marginBottom: 30}}
            multiline
            numberOfLines={6}
            editable
            />
          
          <Button
            title="Next"
            color = {constants.mainButtonColor}
            onPress={() => {
              this.props.navigation.navigate("BrowserPage")
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
  });