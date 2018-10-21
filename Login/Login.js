import React, { Component } from 'react';
import { AppRegistry , StyleSheet, Text, View, Image, TextInput } from 'react-native';

class Login extends Component{
    render() {
      return(
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('./assets/bed.png')}/>
            <Text style={styles.header1}>Welcome to HeySun</Text>
          </View>
          <View style={styles.formContainer}>
            <LoginForm />
          </View>
  
        </View>
      );
    }

  }
  export default Login;