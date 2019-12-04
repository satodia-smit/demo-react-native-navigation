import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from '../styles/style';

class Details_Screen extends Component {
  static navigationOptions = {
    title: 'Details Screen',
  };

  gotoNextActivity = () => {
    this.props.navigation.navigate('Second');
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.text}>This is Details Screen Activity.</Text>
      </View>
    );
  }
}

export default Details_Screen;