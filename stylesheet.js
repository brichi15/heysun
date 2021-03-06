import React, { Component } from 'react';
import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({      ///standard
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#a96afb',
      
  },
    title: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 60,
    },
    h0: {
      color: '#fff',
      fontSize: 20,
      textAlign: 'center',
      opacity: 0.9,
      width: 180,
      padding: 10,
    },
    h1: {
      color: '#fff',
      fontSize: 18,
      textAlign: 'center',
      opacity: 0.9,
      width: 300,
      
    },
    logoContainer: {              ///logo
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center'
    },
    logo: {
      width: 120,
      height: 120
    },

    formContainer: {

    },
    
    formIn: {                       ///login
      flexDirection: 'column',
      paddingHorizontal: 0
    },
    formButton: {
      flexDirection: 'row',
      paddingHorizontal: 0
     
    },
    input: {
      height: 40,
      backgroundColor: 'rgba(225,225,225,0.4)',
      width: '100%',
      color: '#fff',
      fontSize: 18,
      marginBottom: 20,
      paddingHorizontal: 20,
      borderRadius: 18
    
    },
    buttonSignup: {
      height: 50,
      flex: 1,
      backgroundColor: 'rgba(225,225,225,0.9)',
      paddingVertical: 15,
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      marginBottom: 30,
      marginRight: 1,

    },
    buttonLogin: {
      height: 50,
      flex: 1,
      backgroundColor: 'rgba(225,225,225,0.9)',
      paddingVertical: 15,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      marginBottom: 30,
      marginLeft: 1,

    },
    login: {
      textAlign: 'center',
      color: '#a96afb',
      fontSize: 16,
    }, 

    timeText:
    {
        fontSize: 50,
        color: '#fff',
    },

    daysText:
    {
        color: '#fff',
        fontSize: 25, 

    },

    alarmContainer: {
      backgroundColor: '#a96afb',
      flex: 1,
      paddingTop: (Platform.OS == 'ios') ? 20 : 0,
    },

    alarmText: {
      alignItems: 'center',
      paddingTop: 30,
    },
    setAlarmText: {
      alignItems: 'center',
      paddingTop: 12,
    },

    setAlarmDrop: {
      flex: 1,
      flexDirection: 'row',
      paddingHorizontal: 5,
    },

    timePick: {
      flex: 1,
      height: 30,
      padding: 10,
      
    },

    hourMinSec: {
      color: '#fff',
      fontSize: 18,

    },

  
});

module.exports = styles;