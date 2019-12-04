import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import styles from '../styles/style';

class Student_Screen extends Component {
  static navigationOptions = {
    title: 'Student',
  };

  gotoNextActivity = () => {
    this.props.navigation.navigate('Forth');
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.text}>This is Student Screen Activity.</Text>

        <Button onPress={this.gotoNextActivity} title="Open Details Activity" />
      </View>
    );
  }
}

export default Student_Screen;
