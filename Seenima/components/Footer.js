import * as React from 'react';
import { 
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Image,
    StyleSheet,
    ScrollView,
    Button,
    Dimensions
    } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { fonts } from '../themes/fonts';

const {width, height} = Dimensions.get("screen");

const Footer = () => {

    return(
        <View>
         <View style={ styles.footercontainer}>
              <Text style = {styles.title}> SEENIMA </Text>
              <Text style = {{fontWeight:"500", fontSize:20, color:'white'}}> © 2022 </Text>
         </View>
         
        <View>
              <LinearGradient
                    colors={['#103AA0', '#8BC1D6']}
                    style={styles.gradientcontainer}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                     >
                  <Text style = {styles.socialmedia}> Visit our social media</Text>
                  <View style = {styles.icons}>
                       <MaterialCommunityIcons name="facebook" size={50} color="white" />
                       <MaterialCommunityIcons name="instagram" size={50} color="white" />
                       <SimpleLineIcons name="social-twitter" size={50} color="white" />
                  </View>
                  
              </LinearGradient>
        </View>
       
   
      </View>
    );
}
export default Footer;

const styles = StyleSheet.create({
    gradientcontainer:{
      height:150,
      width,
    },
    footercontainer:{ 
        position:'relative',
        textAlign:'center',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#1f2f56',
        height:200,
        },
    title:{
        fontSize:70,
        fontFamily: fonts.family.headertitle,
        color: "#27FFFF",
    },
    socialmedia:{
        fontSize:20,
        fontFamily:fonts.family.heading,
        color: "white",
        textAlign:'center',
        marginTop:20,
    },
    icons:{
        flexDirection:'row',
        top:20,
        justifyContent:'space-between',
        top:-35,
        padding:50,
    },
})