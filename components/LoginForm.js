import React, { Component } from 'react';
import { AppRegistry , StyleSheet, Text, View, Image, TextInput } from 'react-native';
import styles from '../stylesheet'

class LoginForm extends Component{
    render() {
      return(
        <View style={styles.form}>
          <TextInput placeholder="  username or email" placeholderTextColor="white" underlineColorAndroid='transparent' style={styles.input} />
          <TextInput placeholder="  password" placeholderTextColor="white" underlineColorAndroid='transparent' style={styles.input} />
  
        </View>    
      );
    }
  }

  

 export default LoginForm;