import React, { Component } from 'react';
import { Text, View, Image, KeyboardAvoidingView, StatusBar} from 'react-native';
import LoginForm from './LoginForm'
import styles from '../stylesheet'

class Login extends Component{
    render() {
      return(
        
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <StatusBar hidden/>
          <View style={styles.logoContainer}>
            <Text style={styles.title}>HeySun</Text>
            <Image style={styles.logo} source={require('../assets/bed.png')}/>
            <Text style={styles.h1}>A social alarm clock rewards system</Text>
          </View>
          <View style={styles.formContainer}>
            <LoginForm></LoginForm>
          </View>
  
        </KeyboardAvoidingView>
      );
    }
  
}

export default Login;