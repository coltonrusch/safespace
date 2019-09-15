import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, ScrollView } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import * as constants from "./CONSTANTS"
import AsyncStorage from '@react-native-community/async-storage';
import * as arrayMaker from './getstrings'

function weightedwords(word, weight){
  this.words = word;
  this.weights = weight;
}

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
              Please select two keywords that make you uncomfortable
          </Text>

          <Text style ={{marginBottom: 10}}>
              One Concept
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
              One Specific Word (like a names)
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
          style = {{marginBottom: 30}}
            title="Next"
            color = {constants.mainButtonColor}
            onPress={ this.storeData }
          />

          <Button
            title="Skip"
            color = {constants.mainButtonColor}
            onPress={() => this.props.navigation.navigate("SamplePages") }
          />
        </View>
        </ScrollView>

      );
    }

    storeData = async () => {
      var nameobjectlist = []

      var singularConcept = this.state.input1.split("\n")[0];
      var i;

      let stringList = []
      let weightList = [] 
      
      arrayMaker.getString(singularConcept, "words")
      .then(res => {
        console.warn("Striasdfsdzfx" + res)
        stringList = res
        arrayMaker.getString(singularConcept, "weights")
        .then(res => {
          weightList = res;
          }).then(res2 => {
            for (var ii = 0; ii < stringList.length; ii++) {
              nameobjectlist.push(weightedwords(stringList[ii], weightList[ii]))  
            }
            var specificwordlist = this.state.input2.split("\n")[0]
            nameobjectlist.push(weightedwords(specificwordlist[i], 100))
      
            AsyncStorage.setItem('@AllObjects', nameobjectlist)
      
            this.props.navigation.navigate("SamplePages")
        })
      }).catch(error => console.error(error));


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
