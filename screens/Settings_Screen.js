import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from '../styles/style';

class Settings_Screen extends Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.text}>This is Settings Screen Activity.</Text>
      </View>
    );
  }
}

export default Settings_Screen;
