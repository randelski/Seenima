import { useState } from "react";
import { View, Text, Button, FlatList, TouchableOpacity, ScrollView, Image } from "react-native";
import { globalStyles } from '../themes/global';
import { Card } from 'react-native-elements';

import axios from "axios";
import { movies } from "../components/Data";
import Header from "../components/header";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";


export default function HomeScreen({ navigation }) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let date = new Date();
  let month = months[date.getMonth()] + ' / ' + date.getDate() + ' / ' + date.getFullYear();

  const [data, setData] = useState([]);

  axios
    .post("http://seenima.site/api/read_movies.php")
    .then((res) => {
      setData(res.data.body);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <ScrollView style={globalStyles.background} >
      <View>
        <Carousel data={movies} />

        <Text style={globalStyles.mainTitle}>Now Showing</Text>

        <FlatList

          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.movie_id}
          renderItem={({ item }) => (


            <View>
              {
                item.movie_type == "Now Showing" ? (
                  <Card containerStyle={globalStyles.card}>

                    <TouchableOpacity onPress={() => navigation.navigate('Schedule Selection Screen', item)}>
                      <Image style={globalStyles.itemPhoto}
                        source={{ uri: item.movie_poster }} />
                      <Text style={globalStyles.titletext}>{item.movie_title} </Text>
                      <Text style={globalStyles.datetext}>Date:  {item.movie_date} </Text>
                      <Text style={globalStyles.slotstext}>Available slots: {item.slot} </Text>
                    </TouchableOpacity>



                  </Card>
                ) : null}
            </View>


          )}
        />

        <Text style={globalStyles.mainTitle}>Coming soon</Text>
        <FlatList

          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.movie_id}
          renderItem={({ item }) => (

            <View>
              {
                item.movie_type == "Coming Soon" ? (

                  <Card containerStyle={globalStyles.card}>
                    <TouchableOpacity onPress={() => navigation.navigate('Movie Details Screen', item)}>
                      <Image style={globalStyles.itemPhoto}
                        source={{ uri: item.movie_poster }} />
                      <Text style={globalStyles.titletext}>{item.movie_title} </Text>
                      <Text style={globalStyles.slotstext}>{item.movie_genre} </Text>
                    </TouchableOpacity>
                  </Card>

                ) : null
              }
            </View>
          )} />

        <View style={{ paddingBottom: 25 }}></View>
        <View
        ><Footer /></View>
      </View>
    </ScrollView>
  )
}



