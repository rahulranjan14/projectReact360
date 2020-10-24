import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-vr';
import App from './src/App';

export default class firstproject extends React.Component {
  render() {
    return (
      <View>
       <App />
      </View>
    );
  }
};

AppRegistry.registerComponent('firstproject', () => firstproject);
