import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ImageBackground 
} 
from 'react-native';

export default class splashscreen extends React.Component {

  componentDidMount(){
    let that = this;
    this.waitabit.then(function(value) {
      that.props.navigation.navigate("Warning")
    });  
  }

  render() {
    return (
      <ImageBackground source ={require('./background.png')} style={styles.container}>
        
      </ImageBackground>
    );
  }

  waitabit = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('foo');
    }, 1500);
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
