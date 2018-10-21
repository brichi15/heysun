import React, { Component } from 'react';
import { Text, View, Image, KeyboardAvoidingView, StatusBar} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import LoginForm from './LoginForm'
import styles from '../stylesheet'

class Login extends Component{
    render() {
      return(
        
        
          
          <View style={styles.logoContainer}>
            <Text style={styles.title}>HeySun</Text>
              <Image style={styles.logo} source={require('../assets/bed.png')}/>
            <Text style={styles.h1}>A social alarm clock</Text>
            <Text style={styles.h1}>rewards system</Text>
          </View>

  
   
      );
    }
  
}

export default Login;