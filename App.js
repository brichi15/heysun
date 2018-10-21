import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
<<<<<<< HEAD
import { createStackNavigator } from 'react-navigation';
import Splash from './components/Splash'
import Login from './components/Login'
import Alarm from './components/alarms'
import styles from './stylesheet'
=======
import Splash from './components/Splash';
import Login from './components/Login';
import styles from './stylesheet';
import Alarm from './components/alarm';
>>>>>>> 203ead1c7dccd8980f9db5c583f936d700492278


export default class App extends Component {
  
  render() {
<<<<<<< HEAD
    return(
    <AppStack />
=======
    return (
     //<Login />
     <Alarm />
>>>>>>> 203ead1c7dccd8980f9db5c583f936d700492278
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
