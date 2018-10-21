import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Splash from './components/Splash'
import Login from './components/Login'
import styles from './stylesheet'


//------------------------------splash


export default class App extends Component {
  render() {
    return (
     <Login />
    );
  }
}

AppRegistry.registerComponent('heysun', () => App);
