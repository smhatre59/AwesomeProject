/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback
} from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Picker,InputGroup, Input, Icon } from 'native-base';
const window = Dimensions.get('window');
const Item = Picker.Item;
export default class Music extends Component {
  constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            selected1: 'key0',
            results: {
                items: []
            }
        }
    }
    onValueChange (value: string) {
       this.setState({
           selected1 : value
       });
   }
   handleButtonPress(){
     Alert.alert(
                  'Google Music',
                  'The Best Music Player since alst 5 years',
                  [ {text: 'Dismiss', onPress: () => console.log('Ask me later pressed')}, 
                  ]
                  )
   }
  render() {
    return (
      <Container>
        <Content style={styles.cardContainer}>
          <View style={styles.musicHeader}>
            <Image source={{uri:'http://wefix.co.za/wp-content/uploads/2016/08/android-nougat-1.jpg'}} style={styles.imgcontainer}>
              <View style={styles.upperView}>
                <TouchableWithoutFeedback onPress={()=>this.handleButtonPress()}>
                  <Image source={require('../../icons/play.png')} style={styles.imglogo}/>
                </TouchableWithoutFeedback>
              </View>
            <View style={styles.overlayText}>
              <View style={{flex:1}}/>
              <View style={styles.imageText}>
              <Text style={[styles.name,styles.textwhite]}>
                Google Music
              </Text>
              <Text style={styles.textwhite}>
                Playlists.Stations.Artists.Albums...
              </Text>
              </View>
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

          <View style={styles.typepicker}>
            <View style={styles.categoryLabel}>
              <Text style={styles.categoryText}>Select Category</Text>
            </View>
            <View style={styles.categorypicker}>
              <Picker
                iosHeader="Select one"
                mode="dropdown"
                selectedValue={this.state.selected1}
                onValueChange={this.onValueChange.bind(this)}
                style={styles.picker}>
                <Item label="Games" value="key0" />
                <Item label="Applications" value="key1" />
                <Item label="Movies" value="key2" />
                <Item label="Books" value="key3" />
              </Picker>
            </View>
          </View>
          <View style={styles.typepicker}>
            <View style={styles.categoryLabel}>
              <Text style={styles.categoryText}>Search Music</Text>
            </View>
            <View style={styles.categorypicker2}>
              <InputGroup style={styles.picker2}>
                <Input placeholder='Track Name'/>
              </InputGroup>
              <View style={{marginLeft:-8,marginTop:8}}>
              <Image source={require('../../images/search.png')} style={styles.searchimg}/>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
cardContainer:{
  backgroundColor:'#e0e0e0'
},
musicHeader:{
  elevation:10,
  shadowColor:'green',
  shadowRadius:10,
  backgroundColor:'blue'
},
upperView:{
  zIndex:2,
  marginTop:48,
  marginLeft:32,
  position:'absolute'
},
imglogo:{
  width:72,
  height:72
},
imgcontainer:{
  height:90
},
albumcontainer:{
  flex:1,
  flexDirection:'row',
  backgroundColor:'white',
},
album:{
  flex:0.3,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'white',
  height:60
},
name:{
  fontWeight:"900",
  fontSize:18,
  color:'black'
},
subname:{
  fontSize:10,
  color:'black'
},
overlayText:{
  backgroundColor:"rgba(0,0,0,0.5)",
  flex:1,
  flexDirection:'row',
  paddingBottom:4,
},
imageText:{
  justifyContent:'flex-end',
},
play:{
  width:72,
  height:72,
  position : 'absolute',
  bottom:-36,
},
textwhite:{
  fontSize:16,
  color:'white',
},
typepicker:{
flex:1,
backgroundColor:'white',
margin:10,
borderRadius:5
},
categoryLabel:{
borderBottomColor:'grey',
borderBottomWidth:1
},
categoryText:{
  fontSize:18,
  fontWeight:"bold",
  margin:5,
  color:'black'
},
categorypicker:{

},
categorypicker2:{
  flexDirection:'row'
},
picker:{
  margin:10,
},
picker2:{
  margin:10,
  width:window.width - 70,
  height:40
},
searchimg:{
  width:40,
  height:40,
}

});
