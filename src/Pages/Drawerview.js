/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback
} from 'react-native';

export default class Home extends Component {
  componentDidMount(){

  }

  render() {
    return (
        <View style={styles.containers}>
          <Image
          style={styles.city}
          source={require('../../icons/city.png')}
          />
          <View>
            <View style={styles.row}>
            <Text>Activities</Text>
            </View>
            <TouchableNativeFeedback>
            <View style={styles.row}>
              <Image
              style={styles.icons}
              source={require('../../icons/share.png')}
              />
              <Text>Share</Text>
            </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
            <View style={styles.row}>
              <Image
              style={styles.icons}
              source={require('../../icons/send.png')}
              />
              <Text>Feedback</Text>
            </View>
            </TouchableNativeFeedback>

          </View>
        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
  },
  city:{
    width:300,
    height:180,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  row: {
    height:48,
    alignItems:'center',
    flexDirection:'row',
    padding:12,
  },
  icons:{
    width:24,
    height:24,
    marginRight:12,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
