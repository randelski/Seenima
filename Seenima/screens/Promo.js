import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, StatusBar, Dimensions, Image } from "react-native";
import { globalStyles } from '../themes/global';


const images = [

  'https://scontent.xx.fbcdn.net/v/t1.15752-9/308104400_1532861060508191_4283751712958719447_n.png?stp=dst-png_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=aee45a&_nc_ohc=fGxsO18Wfp8AX-TBREU&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVI2pxzou9xu8CMTGcmGk8doIvu1IN06m6D0VGQ7rP1AnQ&oe=635C2597',
  'https://scontent.xx.fbcdn.net/v/t1.15752-9/304790303_899805470991679_735820138074480502_n.png?stp=dst-png_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_ohc=_ZIxvwly5oIAX8X3Dfy&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLGRRuZrmChIhUUAIvESod3pohBzxJDCJLcZaur7yBV8Q&oe=635D4CE9',

];

const WIDTH = Dimensions.get("screen").width;


export default function PromoScreen() {

  const [imgActive, setimgActive] = useState(0);

  onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if (slide != imgActive) {
        setimgActive(slide);
      }
    }
  }

  return (
    <View style={{ backgroundColor: '#072f5f' }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.wrap}>

          <Text style={styles.text1}>
            DISCOVER
          </Text>
          <Text style={styles.text2}>
            Find Great Deals
          </Text>
          <ScrollView
            onScroll={({ nativeEvent }) => onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap}
          >
            {
              images.map((e) =>
                <Image
                  key={e}
                  resizeMode='stretch'
                  style={styles.wrap}
                  source={{ uri: e }}
                />
              )
            }

          </ScrollView>
          <View style={styles.wrapDot}>
            {
              images.map((e, index) =>
                <Text
                  key={e}
                  style={imgActive == index ? styles.dotActive : styles.dot}
                >
                  ●
                </Text>
              )
            }
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#072f5f',
    marginTop: 50,

  },
  wrap: {
    width: WIDTH,
    height: 720,
    marginTop: 20,



  },
  wrapDot: {
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: 3,
    color: 'black'
  },

  dot: {
    margin: 3,
    color: 'white'
  },
  text1: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#58cced',
    top: 20,
    left: 10,
  },
  text2: {
    top: 20,
    color: 'white',
    left: 10,
  }

});

