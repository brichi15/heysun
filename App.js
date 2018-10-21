import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Splash from './components/Splash'
import Login from './components/Login'
import Alarm from './components/alarm'
import styles from './stylesheet'
import LoginForm from './components/LoginForm'


export default class App extends Component {
  constructor(){
    super();
    global.clockFlag = 0;
  }
  
  render() {
    return(
      <LoginForm />
    );
  }
}




const AppStack = createStackNavigator({
  
  Splash: { 
    screen: Splash,
    navigationOptions: {
      header: null,
    }
  },

  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    }
  },

  Alarm: {
    screen: Alarm,
    navigationOptions: {
      header: null,
    }
  },

});



AppRegistry.registerComponent('heysun', () => App);
