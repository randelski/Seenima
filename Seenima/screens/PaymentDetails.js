import { View, Text, Button, FlatList, TouchableOpacity, ScrollView, Image, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { globalStyles } from '../themes/global';

import Footer from "../components/Footer";
import Login from "../components/Login";
import { colors } from "../themes/color";


let date = new Date();
let month = date.getMonth() + '-' + date.getDate() + '-' + date.getFullYear();

export default function PaymentDetailsScreen({ route, navigation }) {

    const pressHandler = () => {
        navigation.navigate('Ticket Screen'
            , {

            })
    }

    return (
        <View>
            <ScrollView style={globalStyles.background}>
                <View>
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
                        <Text style={globalStyles.posterTitle}>Duration</Text>
                        <Text style={globalStyles.posterSubtitle}>{route.params.movie_duration} mins</Text>
                        <Text style={globalStyles.posterTitle}>Genre </Text>
                        <Text style={globalStyles.posterSubtitle}>{route.params.movie_genre}</Text>
                    </View>
                    <View style={globalStyles.detailsContainer}>
                        <LinearGradient
                            //#345196 #1F2F55
                            colors={['#1F2F55', '#345196']}
                            start={{ x: 1, y: 2, }}
                            end={{ x: 0.1, y: 1, }}
                            style={globalStyles.synopsisContainer}>
                            {/* TITLE MOVIE */}
                            <Text style={globalStyles.header}>{route.params.movie_title}</Text>
                        </LinearGradient>

                        <LinearGradient
                            //#345196 #1F2F55
                            colors={['#1F2F55', '#345196']}
                            start={{ x: 1, y: 2, }}
                            end={{ x: 0.1, y: 1, }}
                            style={globalStyles.paymentContainer}>
                            {/* TITLE MOVIE */}
                            <Text style={globalStyles.header2}>Payment Details</Text>
                        </LinearGradient>
                        <LinearGradient
                            //#345196 #1F2F55
                            colors={['#1F2F55', '#345196']}
                            start={{ x: 1, y: 0, }}
                            end={{ x: 2, y: 0, }}
                            style={globalStyles.paymentsContainer}>
                            {/* TITLE MOVIE */}
                            <View>
                                <Text style={globalStyles.detailHeadertext}>Date of Showing</Text>
                                <Text style={globalStyles.detailContenttext}>{month}</Text>
                            </View>
                            <View>
                                <Text style={globalStyles.detailHeadertext}>Time of Showing</Text>
                                <Text style={globalStyles.detailContenttext}>{route.params.reservation_time}</Text>
                            </View>
                            <View>
                                <Text style={globalStyles.detailHeadertext}>Cinema Room</Text>
                                <Text style={globalStyles.detailContenttext}>{route.params.reservation_room}</Text>
                            </View>
                            <View>
                                <Text style={globalStyles.detailHeadertext}>Selected Seat/s</Text>
                                <Text style={globalStyles.detailContenttext}>{route.params.reservation_seat}</Text>
                            </View>
                            <View>
                                <Text style={globalStyles.detailHeadertext}>Ticket Price</Text>
                                <Text style={globalStyles.detailContenttext}>P300</Text>
                            </View>


                        </LinearGradient>

                    </View>
                    <View style={{ padding: 50 }}></View>
                </View>
            </ScrollView>
            <View style={globalStyles.payment}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View>


                    </View>
                    <View>
                        <View >
                            <Login />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}



