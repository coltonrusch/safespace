import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ImageBackground 
} 
from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <ImageBackground source ={require('./background.png')} style={styles.container}>
        
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
