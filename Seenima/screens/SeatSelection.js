import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { View, Text, Button, FlatList, TouchableOpacity, Pressable, ScrollView, ImageBackground } from "react-native";
import { globalStyles } from '../themes/global';

import { LinearGradient } from 'expo-linear-gradient';

import CoverMovie from "../components/CoverMovie";
import { colors } from "../themes/color";
import { color } from "react-native-elements/dist/helpers";


export default function SeatSelectionScreen({ route, navigation }) {

    const [seats, setSeats] = useState([
        { id: 1, seatCode: 'A0', isOccupied: true, selected: false },
        { id: 2, seatCode: 'A1', isOccupied: true, selected: false },
        { id: 3, seatCode: 'A2', isOccupied: true, selected: false },
        { id: 4, seatCode: 'A3', isOccupied: true, selected: false },
        { id: 5, seatCode: 'A4', isOccupied: true, selected: false },
        { id: 6, seatCode: 'A5', isOccupied: true, selected: false },
        { id: 7, seatCode: 'A6', isOccupied: true, selected: false },
        { id: 8, seatCode: 'A7', isOccupied: true, selected: false },

        { id: 9, seatCode: 'B0', isOccupied: true, selected: false },
        { id: 10, seatCode: 'B1', isOccupied: true, selected: false },
        { id: 11, seatCode: 'B2', isOccupied: true, selected: false },
        { id: 12, seatCode: 'B3', isOccupied: true, selected: false },
        { id: 13, seatCode: 'B4', isOccupied: true, selected: false },
        { id: 14, seatCode: 'B5', isOccupied: true, selected: false },
        { id: 15, seatCode: 'B6', isOccupied: true, selected: false },
        { id: 16, seatCode: 'B7', isOccupied: true, selected: false },

        { id: 17, seatCode: 'C0', isOccupied: true, selected: false },
        { id: 18, seatCode: 'C1', isOccupied: true, selected: false },
        { id: 19, seatCode: 'C2', isOccupied: true, selected: false },
        { id: 20, seatCode: 'C3', isOccupied: true, selected: false },
        { id: 21, seatCode: 'C4', isOccupied: true, selected: false },
        { id: 22, seatCode: 'C5', isOccupied: true, selected: false },
        { id: 23, seatCode: 'C6', isOccupied: true, selected: false },
        { id: 24, seatCode: 'C7', isOccupied: true, selected: false },

        { id: 25, seatCode: 'D0', isOccupied: true, selected: false },
        { id: 26, seatCode: 'D1', isOccupied: true, selected: false },
        { id: 27, seatCode: 'D2', isOccupied: true, selected: false },
        { id: 28, seatCode: 'D3', isOccupied: true, selected: false },
        { id: 29, seatCode: 'D4', isOccupied: true, selected: false },
        { id: 30, seatCode: 'D5', isOccupied: true, selected: false },
        { id: 31, seatCode: 'D6', isOccupied: true, selected: false },
        { id: 32, seatCode: 'D7', isOccupied: true, selected: false },

        { id: 33, seatCode: 'E0', isOccupied: true, selected: false },
        { id: 34, seatCode: 'E1', isOccupied: true, selected: false },
        { id: 35, seatCode: 'E2', isOccupied: true, selected: false },
        { id: 36, seatCode: 'E3', isOccupied: true, selected: false },
        { id: 37, seatCode: 'E4', isOccupied: true, selected: false },
        { id: 38, seatCode: 'E5', isOccupied: true, selected: false },
        { id: 39, seatCode: 'E6', isOccupied: true, selected: false },
        { id: 40, seatCode: 'E7', isOccupied: true, selected: false },

        { id: 41, seatCode: 'F0', isOccupied: true, selected: false },
        { id: 42, seatCode: 'F1', isOccupied: true, selected: false },
        { id: 43, seatCode: 'F2', isOccupied: true, selected: false },
        { id: 44, seatCode: 'F3', isOccupied: true, selected: false },
        { id: 45, seatCode: 'F4', isOccupied: true, selected: false },
        { id: 46, seatCode: 'F5', isOccupied: true, selected: false },
        { id: 47, seatCode: 'F6', isOccupied: true, selected: false },
        { id: 48, seatCode: 'F7', isOccupied: true, selected: false },
    ]);

    const scheduleRoute = useRoute();




    return (
        <View>
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
                            <Text style={globalStyles.mainTitle}>Select a Seat</Text>

                            {/* DESCRIPTION */}
                            <View style={{
                                flexDirection: 'row', justifyContent: 'space-between', padding: 20,
                                backgroundColor: colors.bg.secondary
                            }}>
                                <Text style={globalStyles.DateHallTimeText}>{route.params.reservation_date} </Text>
                                <Text style={globalStyles.DateHallTimeText}>{route.params.reservation_room}</Text>
                                <Text style={globalStyles.DateHallTimeText}>{route.params.reservation_time} </Text>
                            </View>

                        </LinearGradient>


                    </View>


                    <View style={globalStyles.detailsContainer}>
                        <FlatList
                            data={seats}
                            numColumns={8}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (


                                <View style={globalStyles.container}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                        <Text style={globalStyles.DateHallTimeText}>{item.reservation_date} </Text>
                                        <Text style={globalStyles.DateHallTimeText}>{item.reservation_room}</Text>
                                        <Text style={globalStyles.DateHallTimeText}>{item.reservation_time} </Text>
                                    </View>

                                    <TouchableOpacity onPress={() => navigation.navigate('Payment Details Screen',
                                        {
                                            movie_title: route.params.movie_title,
                                            movie_genre: route.params.movie_genre,
                                            reservation_time: route.params.reservation_time,
                                            reservation_date: route.params.reservation_date,
                                            reservation_room: route.params.reservation_room,
                                            reservation_seat: item.seatCode,
                                            movie_poster: route.params.movie_poster,
                                            movie_cover: route.params.movie_cover,
                                            movie_duration: route.params.movie_duration



                                        })} style={{ paddingVertical: 2 }}>


                                        {
                                            item.isOccupied == false && item.selected == true ? (

                                                <View style={globalStyles.seatIsSelected}>
                                                    <Text style={{ color: 'white', fontSize: 10 }}>{item.seatCode}</Text>
                                                </View>

                                            ) : item.isOccupied == true && item.selected == false ? (

                                                <View style={globalStyles.seatIsSelected}>
                                                    <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>{item.seatCode}</Text>
                                                </View>

                                            ) : item.isOccupied == false && item.selected == false ? (

                                                <View style={globalStyles.seatIsReserved}>
                                                    <Text>{item.seatCode}</Text>
                                                </View>

                                            ) : null
                                        }



                                    </TouchableOpacity>

                                </View>

                            )}
                        />

                    </View>

                    <View style={{ padding: 20 }}></View>

                </View>

            </ScrollView>

        </View>
    )
}



