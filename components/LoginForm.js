import React, { Component } from 'react';
import { AppRegistry , StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, TextInput, Image } from 'react-native';
import styles from '../stylesheet'
import Alarm from './alarm'
import App from '../App'
import Login from './Login'

class LoginForm extends Component {
  onPress = () => {
    global.clockFlag = 1;
    this.forceUpdate();
  }
    render() {
      if(global.clockFlag == 0){
      return( 
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View>
          <Login /> 
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
                <TouchableOpacity style={styles.buttonSignup}
                  onPress={this.onPress}>
                <Text style={styles.login}>SIGN UP
                </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonLogin}>
                <Text style={styles.login}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </KeyboardAvoidingView>

      );}
      if(global.clockFlag == 1){
        return(
            <Alarm />
        );
    }
  }
}



 export default LoginForm;