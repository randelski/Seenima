import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { View, Text, Button, FlatList, TouchableOpacity, ImageBackground, Image } from "react-native";
import { globalStyles } from '../themes/global';
import { LinearGradient } from 'expo-linear-gradient';

import Header from "../components/header";
import Footer from "../components/Footer";
import { ScrollView } from "react-native-gesture-handler";
import { Card } from 'react-native-elements';



let date = new Date();
let month = date.getMonth() + '-' + date.getDate() + '-' + date.getFullYear();


export default function MovieDetailsScreen({ route, navigation }) {

    const pressHandler = () => {
        navigation.navigate('Seat Selection Screren')
    }





    return (
        <ScrollView>
            <View style={globalStyles.background}>

                <ImageBackground style={globalStyles.itemPhotoBackground} source={{ uri: route.params.movie_cover }}></ImageBackground>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={['transparent', 'black']}
                    style={{
                        width: "100%",
                        height: 350,
                        position: 'absolute',
                    }}>
                </LinearGradient>

                <Image style={globalStyles.posterPhoto} source={{ uri: route.params.movie_poster }} />
                <View style={globalStyles.postercontainer}>
                    <Text style={globalStyles.posterTitle}>Genre </Text>
                    <Text style={globalStyles.posterSubtitle}>{route.params.movie_genre}</Text>
                </View>
                <View style={globalStyles.detailsContainer}>
                    <LinearGradient
                        //#345196 #1F2F55
                        colors={['#1F2F55', '#345196']}
                        start={{ x: 1, y: 2, }}
                        end={{ x: 0.5, y: 1, }}
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
                        start={{ x: 1, y: 2, }}
                        end={{ x: 0.5, y: 1, }}
                        style={globalStyles.profileContainer}>
                        <View>
                            <Text style={globalStyles.mainTitle}>{route.params.name1}</Text>
                            <Card containerStyle={globalStyles.cardContainer}>
                                <Image style={globalStyles.profilePhoto} source={{ uri: route.params.image1 }} />
                            </Card>
                        </View>
                        <View>
                            <Text style={globalStyles.mainTitle}>{route.params.name2}</Text>
                            <Card containerStyle={globalStyles.cardContainer}>
                                <Image style={globalStyles.profilePhoto} source={{ uri: route.params.image2 }} />
                            </Card>
                        </View>
                        <View>
                            <Text style={globalStyles.mainTitle}>{route.params.name3}</Text>
                            <Card containerStyle={globalStyles.cardContainer}>
                                <Image style={globalStyles.profilePhoto} source={{ uri: route.params.image3 }} />
                            </Card>
                        </View>
                        {/* FOR SPACING, DO NOT DELETE */}
                        <View>
                            <Text style={globalStyles.mainTitle}></Text>

                        </View>

                    </LinearGradient>
                </View>



                <View><Footer /></View>
            </View>
        </ScrollView>
    );
}



