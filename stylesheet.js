
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#a96afb',
    },
    title: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 60,
    },
    h1: {
      color: '#fff',
      fontSize: 18,
      textAlign: 'center',
      opacity: 0.9,
      width: 180
    },
    logoContainer: {
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center'
    },
    logo: {
      width: 120,
      height: 120
    },
    formIn: {
      flexDirection: 'column',
      paddingHorizontal: 20
    },
    formButton: {
      flexDirection: 'row',
      paddingHorizontal: 20
     
    },
    input: {
      height: 40,
      backgroundColor: 'rgba(225,225,225,0.4)',
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
    }
  
});

module.exports = styles;