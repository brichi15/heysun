import React, { Component } from 'react';
import { Text, View, Image} from 'react-native';
import LoginForm from './LoginForm'
import styles from '../stylesheet'

class Login extends Component{
    render() {
      return(
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/bed.png')}/>
            <Text style={styles.header1}>Welcome to HeySun</Text>
          </View>
          <View style={styles.formContainer}>
            <LoginForm></LoginForm>
          </View>
  
        </View>
      );
    }
  
}

export default Login;