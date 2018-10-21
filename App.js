import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Splash from './components/Splash';
import Login from './components/Login';
import styles from './stylesheet';
import Alarm from './components/alarm';


//------------------------------splash


export default class App extends Component {
  render() {
    return (
     //<Login />
     <Alarm />
    );
  }
}

AppRegistry.registerComponent('heysun', () => App);
