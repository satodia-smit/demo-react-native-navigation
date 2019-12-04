import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import styles from '../styles/style';

class Home_Screen extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  gotoNextActivity = () => {
    this.props.navigation.navigate('Second');
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.text}>This is Home Screen Activity.</Text>

        <Button onPress={this.gotoNextActivity} title="Open Second Activity" />
      </View>
    );
  }
}

export default Home_Screen;
