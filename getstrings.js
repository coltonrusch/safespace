import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import mapAgeCleaner from 'map-age-cleaner';

export default class getstrings extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    }
  }

  componentDidMount () {
    return fetch('https://api.wordassociations.net/associations/v1.0/json/search?apikey=e331c1c1-4b37-4ca1-9571-af3da6c09716&text=suicide&lang=en')
    .then( (response) => response.json() )
    .then( (responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson.response,
      })
    })

    .catch((error) => {
      console.log(error)
    });
  }

  render () {
    var test = [];
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      )
    } else {

      let wordlist = this.state.dataSource[0].items.map((val, key) => {
        return <View key={key}>
          <Text>{val.item}</Text>
        </View>
      });

      let weightlist = this.state.dataSource[0].items.map((val, key) => {
        return <View key={key}>
          <Text>{val.weight}</Text>
        </View>
      });

        return (
          <View style={styles.container}>
            {wordlist}
            {weightlist}
          </View>
        );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
