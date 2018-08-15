import React , {Component} from 'react';
import { Text, View, StyleSheet ,  AppRegistry} from 'react-native';
import { Constants } from 'expo';

import Login from './src/screens/Login';
import Secured from './src/screens/Secured';




export default class App extends React.Component {
    state = {
    isLoggedIn: false
  }
  render() {
    if (this.state.isLoggedIn)
      return <Secured onLogoutPress={() => this.setState({isLoggedIn: false})} />;
    else
      return <Login onLoginPress={() => this.setState({isLoggedIn: true})} />;
  }
}

AppRegistry.registerComponent(App , () => App);
