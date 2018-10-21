import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Splash from './components/Splash'
import Login from './components/Login'
import Alarm from './components/alarms'
import styles from './stylesheet'


export default class App extends Component {
  
  render() {
    return(
    <AppStack />
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
