import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window')

export default function CarouselItem({ item }) {
    const navigation = useNavigation();
    return (
        <View style={styles.cardView}>
            <ImageBackground style={styles.image} source={{ uri: item.movie_cover }}>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={['transparent', 'black']}
                    style={{
                        width: "100%",
                        height: 400,
                    }}>
                </LinearGradient>
            </ImageBackground>
            <View style={styles.textView}>
                <Text style={styles.itemTitle}>{item.movie_title}</Text>
                <Text style={styles.itemDescription}>{item.movie_description}</Text>

                <View style={styles.fixToText}>

                    <TouchableOpacity style={styles.reserve} onPress={() => navigation.navigate('Schedule Selection Screen', item)}>
                        <Text style={{ color: "black" }}>Reserve</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.moreInfo} onPress={() => navigation.navigate('Movie Details Screen', item)}>
                        <Text style={{ color: "white" }}>More Info</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width,
        height: 400,
    },
    reserve: {
        elevation: 8,
        backgroundColor: "#27FFFF",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 16,
        bottom: 12,
    },
    moreInfo: {
        elevation: 8,
        backgroundColor: "transparent",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: '#27FFFF',
        left: 20,
        bottom: 12,
    },
    fixToText: {
        flexDirection: 'row',
        top: 20,
    },

    textView: {
        position: 'absolute',
        bottom: 50,
        margin: 5,
        left: 5,
    },

    image: {
        resizeMode: 'cover',
        width,
        height: 400,
        borderRadius: 10
    },
    itemTitle: {
        color: '#27FFFF',
        fontSize: 22,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: "bold",
        elevation: 5,
        bottom: 5
    },
    itemDescription: {
        color: 'white',
        fontSize: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 25,
        paddingVertical: 5,
        bottom: 6
    },
    MoreInfoText: {

    }
})

