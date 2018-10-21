import React, { Component } from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import styles from '../stylesheet'

class Splash extends Component {

    render() {
      return (
        <View style={styles.container}>
        <StatusBar hidden/>
          <View style={styles.logoContainer}>
            <Text style={styles.title}>HeySun</Text>
            <Image style={styles.logo} source={require('../assets/bed.png')}/>
          </View>
        </View>

      );
    }
  
}


  export default Splash;