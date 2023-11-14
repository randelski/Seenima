import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { View, Text, Button, FlatList, TouchableOpacity, ImageBackground, Image } from "react-native";
import { globalStyles } from '../themes/global';
import { LinearGradient } from 'expo-linear-gradient';

import Header from "../components/header";
import Footer from "../components/Footer";
import { ScrollView } from "react-native-gesture-handler";
import CoverMovie from "../components/CoverMovie";




let date = new Date();
let month = date.getMonth() + '-' + date.getDate() + '-' + date.getFullYear();


export default function ScheduleSelectionScreen({ route, navigation }) {

    const pressHandler = () => {
        navigation.navigate('Seat Selection Screen', {})
    }

    //const movieRoute = useRoute();

    const movies = [
        {
            reservation_id: 1, reservation_time: '10:30 AM', reservation_room: 'CINEMA A',
            available: 'Available', reservation_seat: 27, reservation_date: 'Oct-26-2022',
        },
        {
            reservation_id: 2, reservation_time: '9:00 AM', reservation_room: 'CINEMA C',
            available: 'Available', reservation_seat: 26, reservation_date: 'Oct-26-2022',
        },
        {
            reservation_id: 3, reservation_time: '11:30 AM', reservation_room: 'CINEMA B',
            available: 'Available', reservation_seat: 25, reservation_date: 'Oct-26-2022',
        },


    ]




    return (
        <ScrollView>
            <View style={globalStyles.background}>
                <CoverMovie item={route} />

                <View style={globalStyles.detailsContainer}>
                    <LinearGradient
                        //#345196 #1F2F55
                        colors={['#1F2F55', '#345196']}
                        start={{ x: 1, y: 2, }}
                        end={{ x: 0.1, y: 1, }}
                        style={globalStyles.synopsisContainer}>
                        {/* TITLE MOVIE */}
                        <Text style={globalStyles.header}>{route.params.movie_title}</Text>
                        {/* DESCRIPTION */}
                        <Text style={globalStyles.headerContent}>{route.params.movie_description}</Text>
                    </LinearGradient>
                </View>


                <View style={globalStyles.detailsContainer}>

                    <LinearGradient
                        //#345196 #1F2F55
                        colors={['#1F2F55', '#345196']}
                        start={{ x: 1.5, y: 2, }}
                        end={{ x: 0.1, y: 2, }}
                        style={globalStyles.availableshowingContainer}>
                        <View style={{ padding: 5 }}></View>
                        <Text style={globalStyles.mainTitle}>Available Showing</Text>
                        <View style={{ padding: 5 }}></View>


                        <ScrollView horizontal={false}>
                            <ScrollView horizontal={true}>
                                <FlatList
                                    data={movies}
                                    keyExtractor={(item) => item.reservation_id}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity onPress={() => navigation.navigate('Seat Selection Screen',
                                            {
                                                movie_title: route.params.movie_title,
                                                movie_genre: route.params.movie_genre,
                                                reservation_time: item.reservation_time,
                                                reservation_date: item.reservation_date,
                                                reservation_room: item.reservation_room,
                                                reservation_seat: item.reservation_seat,
                                                movie_poster: route.params.movie_poster,
                                                movie_cover: route.params.movie_cover,
                                                movie_duration: route.params.movie_duration



                                            })}>
                                            <View style={globalStyles.scheduleContainer}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                                    <Text style={globalStyles.DateHallTimeText}>{item.reservation_date} </Text>
                                                    <Text style={globalStyles.DateHallTimeText}>{item.reservation_room}</Text>
                                                    <Text style={globalStyles.DateHallTimeText}>{item.reservation_time} </Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                                    <Text style={globalStyles.availableSeatsText}>{item.available}</Text>
                                                    <Text style={globalStyles.availableSeatsText}>{item.reservation_seat} SEATS LEFT</Text>
                                                </View>
                                            </View>




                                        </TouchableOpacity>
                                    )} />
                            </ScrollView>
                        </ScrollView>
                        <View style={{ padding: 10 }}></View>
                    </LinearGradient>

                </View>

                <View><Footer /></View>
            </View>
        </ScrollView >
    )
}