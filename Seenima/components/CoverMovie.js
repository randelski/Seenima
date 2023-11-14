import React from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, Animated, ImageBackground, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { globalStyles } from "../themes/global";


export default function CoverMovie({ item }) {

    return (
        <View>
            <ImageBackground style={globalStyles.itemPhotoBackground} source={{ uri: item.params.movie_cover }}></ImageBackground>
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
            <Image style={globalStyles.posterPhoto} source={{ uri: item.params.movie_poster }} />
            <View style={globalStyles.postercontainer}>
                <Text style={globalStyles.posterTitle}>Duration</Text>
                <Text style={globalStyles.posterSubtitle}>{item.params.movie_duration} mins</Text>
                <Text style={globalStyles.posterTitle}>Genre </Text>
                <Text style={globalStyles.posterSubtitle}>{item.params.movie_genre}</Text>
            </View>


        </View>

    )
}