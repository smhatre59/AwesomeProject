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
  Image
} from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail } from 'native-base';
import styles from './styles/Musicstyle';

export default class Music extends Component {
  constructor(props){
  super(props);
  }

  render() {
    return (
      <Container>
                <Content style={styles.cardContainer}>
                    <View style={styles.musicHeader}>
                      <Image source={{uri:'http://wefix.co.za/wp-content/uploads/2016/08/android-nougat-1.jpg'}} style={styles.imgcontainer}>
                        <View style={styles.overlayText}>
                          <Text>
                            Google Music
                          </Text>
                        </View>
                      </Image>
                      <View style={styles.albumcontainer}>
                        <View style={styles.album}>
                        </View>
                      <View style={styles.album}>
                        <Text style={styles.name}>Coldplay</Text>
                        <Text style={styles.subname}>Mystica</Text>
                      </View>
                      <View style={styles.album}>
                        <Text style={styles.name}>Daftpunk</Text>
                        <Text style={styles.subname}>Rock</Text>
                      </View>
                      </View>
                  </View>
                  <View style={style}>

                  </View>
                </Content>
            </Container>
    );
  }
}
