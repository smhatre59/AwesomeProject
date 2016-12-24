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
  Dimensions,
  Image
} from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail } from 'native-base';
const window = Dimensions.get('window');

const newsjson =[
{
"description": "Android 7.0–7.1.1 Nougat (codenamed Android N during development)[4] is the seventh major version of the Android operating system. First released as a beta build on March 9, 2016,[5] it was officially released on August 22, 2016, with Nexus devices being the first to receive the update, though the LG V20 was the first new smartphone released with Nougat. Nougat introduces notable changes to the operating system and its development platform, including the ability to display multiple apps on-screen at once in a split-screen view, support for inline replies to notifications, as well as an OpenJDK-based Java environment and support for the Vulkan graphics rendering API, and seamless system updates on supported devices.",
"name": "Android Nougat",
"city": "7.0",
"time": "August 2016",
"comments": "Latest release 7.1.1",
"img": "http://wefix.co.za/wp-content/uploads/2016/08/android-nougat-1.jpg",
"pimg": "https://lh3.googleusercontent.com/-B7ObxLWBsRU/AAAAAAAAAAI/AAAAAAAAW_w/VGt2B9ZL1k4/s46-c-k-no/photo.jpg"
},
{
"description": "Android 6.0 – 6.0.1 Marshmallow (codenamed Android M during development)[3] is the 6th major version of the Android operating system. First unveiled in May 2015 at Google I/O, it was officially released in October 2015.",
"name": "Android Marshmallow",
"city": "6.0",
"time": "October 2015",
"comments": "Latest release 6.0.1",
"img": "http://www.itmlab.com/wp-content/uploads/2015/10/android-6-marshmallow-banner-hiddenbrains-twitter.jpg",
"pimg": "https://pbs.twimg.com/profile_images/937374385/Mark_Zuckerberg_szykuja_3268108_normal.jpg"
},
{
"description": "Android 5.0–5.1.1 Lollipop is a version of the Android mobile operating system developed by Google, spanning versions between 5.0 and 5.1.1. Unveiled on June 25, 2014 at the Google I/O 2014 conference, it became available through official over-the-air (OTA) updates on November 12, 2014, for select devices that run distributions of Android serviced by Google (such as Nexus and Google Play edition devices). Its source code was made available on November 3, 2014",
"name": "Android Lollipop",
"city": "5.0",
"time": "July 2014",
"comments": "Latest release 5.1.1",
"img": "http://i2.wp.com/www.thegadgetmasters.com/wp-content/uploads/2014/11/lolli-820x420.jpg",
"pimg": "https://lh3.googleusercontent.com/-Y86IN-vEObo/AAAAAAAAAAI/AAAAAAAKyAM/6bec6LqLXXA/s46-c-k-no/photo.jpg"
},
{
"description": "Android 4.4–4.4.4 KitKat is a version of the Android mobile operating system developed by Google, spanning versions between 4.4 and 4.4.4. Unveiled on September 3, 2013, KitKat focused primarily on optimizing the operating system for improved performance on entry-level devices with limited resources.",
"name": "Android KitKat",
"city": "4.4",
"time": "September 2013",
"comments": "Latest release 4.4.4",
"img": "http://panama-me.com/wp-content/uploads/2009/09/Kitkat-banner.JPG",
"pimg": "http://cdn.images.express.co.uk/img/dynamic/galleries/64x64/97537.jpg"
}
]
export default class News extends Component {
  constructor(props){
  super(props);
  }
  renderRow(newsItem){
    return(<CardItem style={styles.CardItem}>
      <View style={styles.newsHeading}>
        <Image source={{uri:newsItem.pimg}} style={styles.newsAvatar}/>
        <View style={styles.newsCenterHeading}>
        <Text>{newsItem.name}</Text>
        <Text style={styles.versionText}>{newsItem.city}</Text>
        </View>
        <Text style={styles.newsTime}>{newsItem.time}</Text>
      </View>
      <Text numberOfLines={5} style={styles.newDesc}>{newsItem.description}</Text>
      <Image resizeMode={'stretch'} source={{uri:newsItem.img}} style={styles.newsImg}/>
      <Text>{newsItem.comments}</Text>
    </CardItem>)
  }
  render() {
    return (

    <Container>
    <Content style={styles.cardContainer}>
      <Card dataArray={newsjson}
      renderRow={(newsItem) =>
      this.renderRow(newsItem)
      }
      style={styles.cardLayout}>
      </Card>
    </Content>
  </Container>
    );
  }
}



const styles = StyleSheet.create({
    CardItem:{
    margin:10,
    borderColor:'black',
    borderRadius:4,
    marginBottom:8,
    padding:10,
    backgroundColor:'white'
  },
  cardContainer:{
  },
  cardLayout:{
    backgroundColor:'#e0e0e0',
    marginTop:0,
    marginBottom:0,

  },
  newsHeading:{
    flex:1,
    margin:3,
    flexDirection:'row',
    padding:5
  },
  newsCenterHeading:{
    flex:0.6,
    padding:2
  },
  newDesc:{
    fontSize:16,
    fontWeight:"400",
    color:"black",
    marginBottom:5
  },
  newsTime:{
    alignSelf:'flex-end',
    alignItems:'flex-end',
    justifyContent:'center',
    marginBottom:20
  },
  versionText:{
    color:'blue'
  },
  newsImg:{

  height:200
  },
  newsAvatar:{
    width:35,
    height:35
  }
});
