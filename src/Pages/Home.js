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
import {Scene, Router} from 'react-native-router-flux';
import DrawerLayout from 'react-native-drawer-layout';
import DrawerView from './Drawerview';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import News from './News';
import Music from './Music';

import { Container, Content, Button, Icon, Fab } from 'native-base';

export default class Home extends Component {

  closeDrawer(){
    // this.drawer.openDrawer();
    console.log(this);
  }

  render() {
    return (
      <DrawerLayout
        drawerWidth={300}
        ref={(drawer) => { return this.drawer = drawer  }}
        keyboardDismissMode="on-drag"
        statusBarBackgroundColor="blue"
        renderNavigationView={() => <DrawerView/>}>
        <View style={styles.container}>
        <TouchableNativeFeedback
        onPress={()=>this.drawer.openDrawer()}>
          <Image
          style={styles.hamburger}
          resizeMode={Image.resizeMode.contain}
          source={require('../../icons/hamburger.png')}
          />
          </TouchableNativeFeedback>
          <View style={styles.appBarContainer}>
            <Text style={styles.appName}>Technovanza Hackaton</Text>
          </View>
        </View>
        <ScrollableTabView style={{flex:1}} tabBarBackgroundColor="blue">
          <Music tabLabel="MUSIC"/>
          <News tabLabel="NEWS"/>
        </ScrollableTabView>
        <Fab
        active={true}
        direction="right"
        containerStyle={{ marginLeft: 10 }}
        style={{ backgroundColor: '#E91E63' }}
        position="bottomRight"
        >
        <Text style={{color:'black'}}>+</Text>
        </Fab>

      </DrawerLayout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:50,
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'row',
    backgroundColor: 'blue',
  },
  appBarContainer:{
    alignItems:'center',
  },
  appName:{
    color:'white',
    fontWeight:"400",
    fontSize:18,
  },
  hamburger:{
    width:24,
    height:24,
    margin:12,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
