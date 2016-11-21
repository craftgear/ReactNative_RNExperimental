import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

export default class RNExperimental extends Component {
  render() {
    return (
      <Home />
    );
  }
}

const Button = ({title, onPress}) => (
  <TouchableHighlight
    underlayColor='#EFEFEF'
    onPress={onPress}
    style={styles.button}
  >
    <Text>{title}</Text>
  </TouchableHighlight>
);

const Home = ({ onPress }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Hello From Home</Text>
    <Button onPress={onPress} title='Go To Next Scene' />
  </View>
);

const About = ({ onPress, goBack }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Hello From About</Text>
    <Button onPress={onPress} title='Go To Next Scene' />
    <Button onPress={goBack} title='Go Back'/>
  </View>
);

const Contact = ({ goBack }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Hello From Contact</Text>
    <Button title='Go Back' onPress={goBack} />
  </View>
);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#F5FCFF',
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 40,
    marginTop: 200,
    textAlign: 'center',
  },
  button: {
    height: 70,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#EDEDED'
  },
});

AppRegistry.registerComponent('RNExperimental', () => RNExperimental);
