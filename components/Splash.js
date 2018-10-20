import React, { Component } from 'react';
import { AppRegistry , StyleSheet, Text, View, Image, TextInput } from 'react-native';
import styles from '../stylesheet'

class Splash extends Component {
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/bed.png')}/>
            <Text style={styles.title}>HeySun</Text>
          </View>
        </View>
      );
    }
  
  }

  export default Splash;