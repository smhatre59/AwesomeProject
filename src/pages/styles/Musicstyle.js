import { Dimensions,StyleSheet } from 'react-native';
const window = Dimensions.get('window');
const styles = StyleSheet.create({
cardContainer:{
  backgroundColor:'black'
},
musicHeader:{
  elevation:10,
  shadowColor:'green',
  shadowRadius:10,
  backgroundColor:'blue'
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
  marginTop:20,
  backgroundColor:"red"
}
});


export default styles;
