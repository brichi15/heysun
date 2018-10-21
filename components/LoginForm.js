import React, { Component } from 'react';
import { AppRegistry , StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from '../stylesheet'

class LoginForm extends Component {
    render() {
      return(
        <View>
            <View style={styles.formIn}>
            <TextInput 
            placeholder="username or email" 
            placeholderTextColor="rgba(225,225,225,0.9)" 
            underlineColorAndroid='transparent' 
            returnKeyType="next"
            keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
            onSubmitEditing={() => this.passwordInput.focus()}
            style={styles.input} 
            />
            
            <TextInput 
            placeholder="password" 
            placeholderTextColor="rgba(225,225,225,0.9)" 
            underlineColorAndroid='transparent' 
            secureTextEntry
            returnKeyType="go"
            style={styles.input} 
            ref={(input) => this.passwordInput = input}
            />
            </View>


            <View style={styles.formButton}>
            <TouchableOpacity style={styles.buttonSignup}>
              <Text style={styles.login}>SIGN UP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonLogin}>
              <Text style={styles.login}>LOGIN</Text>
            </TouchableOpacity>
            </View>
          </View>
      );
    }
  }

  

 export default LoginForm;