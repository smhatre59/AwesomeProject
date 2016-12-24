import { Dimensions,StyleSheet } from 'react-native';
const window = Dimensions.get('window');
const styles = StyleSheet.create({
CardItem:{
  margin:10,
  borderColor:'black',
  borderRadius:4,
  marginBottom:8,
  padding:10,
  backgroundColor:'white'
},
cardLayout:{
  backgroundColor:"grey"
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


export default styles;
