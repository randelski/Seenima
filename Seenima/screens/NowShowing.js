import { useState, useEffect } from "react";
import { View, Text, Button, FlatList, TouchableOpacity, Image, } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { globalStyles } from '../themes/global';
import { Card } from 'react-native-elements';

import Footer from "../components/Footer";


export default function NowShowingScreen({ navigation }) {

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let date = new Date();
  let month = months[date.getMonth()] + ' / ' + date.getDate() + ' / ' + date.getFullYear();

  const [nowshowing, setNowshowing] = useState([
    {
      movie_id: 1,
      movie_title: "AVATAR: The Way of Water",
      movie_poster: "https://m.media-amazon.com/images/M/MV5BMWFmYmRiYzMtMTQ4YS00NjA5LTliYTgtMmM3OTc4OGY3MTFkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
      movie_cover: "https://p9blog.blob.core.windows.net/media/Default/blog-post-assets/images/avatar-movie-poster.jpg ",
      movie_date: month,
      movie_slot: 26,
      movie_genre: "Action, Aventure & Fantasy",
      movie_duration: "105",
      movie_description: "Jake Sully lives with his newfound family formed on the planet of Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their planet.",
    },
  ]);



  const [currentDay, setCurrentDay] = useState('');

  useEffect(() => {

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const d = new Date();
    let day = weekday[d.getDay()];


    setCurrentDay(
      day
    );
  }, []);

  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year


    setCurrentDate(
      month + '  ' + date + '  ' + year

    );
  }, []);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    var hours = new Date().getHours(); //Current Hours
    var minutes = new Date().getMinutes(); //Current Minutes
    let am_pm = 'PM';
    if (minutes < 10) {
      minutes = '0' + minutes;
    }


    if (hours > 12) {
      hours = hours - 12;
    }

    if (hours == 0) {
      hours = 12;
    }

    if (new Date().getHours() < 12) {
      am_pm = 'AM';
    }

    setCurrentTime(
      hours + ':' + minutes + ' ' + am_pm
    );
  }, []);

  return (
    <View>
      <ScrollView style={globalStyles.background}>
        <View >
          <View style={globalStyles.timeContainer}>
            <Text style={globalStyles.timetext}>{currentTime}</Text>
            <Text style={globalStyles.datetimetext}>{currentDay} | {currentDate}</Text>
            <Text></Text>
          </View>
          <Text style={globalStyles.mainTitle}>Now Showing</Text>

          <FlatList
            style={globalStyles.listContainer}
            data={nowshowing}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Card containerStyle={globalStyles.card}>
                <TouchableOpacity onPress={() => navigation.navigate('Schedule Selection Screen', item)}>
                  <Image style={globalStyles.itemPhoto}
                    source={{ uri: item.movie_poster }} />
                  <Text style={globalStyles.titletext}>{item.movie_title} </Text>
                  <Text style={globalStyles.datetext}>Date:  {item.movie_date} </Text>
                  <Text style={globalStyles.slotstext}>Available slots: {item.movie_slot} </Text>
                </TouchableOpacity>
              </Card>


            )}
          />



          <View><Footer /></View>

        </View>
      </ScrollView>

    </View>
  )
}



