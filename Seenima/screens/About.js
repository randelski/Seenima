import { View, Text, Button, FlatList, TouchableOpacity, ImageBackground, Image, ScrollView, TextInput } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { globalStyles } from '../themes/global';
import { Card } from 'react-native-elements';

import Footer from "../components/Footer";

export default function AboutScreen({ navigation }) {


    return (
        <ScrollView style={globalStyles.background}>
            <View>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0.3 }}
                    colors={['black', '#1f2f56']}
                    style={{
                        width: "100%",
                        height: 300,
                        position: 'relative',
                    }}>
                    <View style={globalStyles.contentContainer}>
                        <Text style={globalStyles.Logotitle}>SEENIMA</Text>
                        <Text style={globalStyles.subHeadertitle}>The House of Entertainment</Text>
                        <Text style={globalStyles.contenttext} >SeeNima is an Online Cinema Ticket Reservation and management System.
                            It is a mobile application and a web systtem that helps users to select their preferred
                            date, time and seating position for a specific aavilable movie showing.
                            There will be a management system to manage the movie showing and monitoring</Text>
                    </View>

                </LinearGradient>
                <View style={{ paddingHorizontal: 50, paddingTop: 20 }}>
                    <LinearGradient
                        //#345196 #1F2F55
                        colors={['#1F2F55', '#345196']}
                        start={{ x: 1, y: 2, }}
                        end={{ x: 0.5, y: 1, }}
                    >
                        <View style={{ paddingBottom: 20 }}>

                            <Card containerStyle={globalStyles.cardContainer}>
                                <ImageBackground style={{ height: 300, width: 230 }} source={{ uri: 'https://hometheateracademy.com/wp-content/uploads/2021/06/home-theater-colors-with-lighting-1024x576.jpg' }} />
                            </Card>
                        </View>
                        <View>


                        </View>

                    </LinearGradient>
                </View>
                <View style={{ paddingHorizontal: 50, paddingTop: 20 }}>
                    <LinearGradient
                        //#345196 #1F2F55
                        colors={['#1F2F55', '#345196']}
                        start={{ x: 1, y: 2, }}
                        end={{ x: 0.5, y: 1, }}
                    >
                        <View style={{ paddingBottom: 20 }}>

                            <Card containerStyle={globalStyles.cardContainer}>
                                <ImageBackground style={{ height: 300, width: 230 }} source={{ uri: 'https://media.istockphoto.com/photos/blue-cinema-theater-seats-picture-id1062446520?k=20&m=1062446520&s=170667a&w=0&h=TGjFbUVVyxcz_-TAajdCopbkWD4fp98lonR7aThXo8o=' }} />
                            </Card>
                        </View>
                        <View>


                        </View>

                    </LinearGradient>
                </View>
                <View style={{ paddingHorizontal: 50, paddingTop: 20, paddingBottom: 20 }}>
                    <LinearGradient
                        //#345196 #1F2F55
                        colors={['#1F2F55', '#345196']}
                        start={{ x: 1, y: 2, }}
                        end={{ x: 0.5, y: 1, }}
                    >
                        <View style={{ paddingBottom: 20 }}>

                            <Card containerStyle={globalStyles.cardContainer}>
                                <ImageBackground style={{ height: 300, width: 230 }} source={{ uri: 'https://www1.lovethatdesign.com/wp-content/uploads/2018/12/20180812-Vox-Mirdif-09.jpg' }} />
                            </Card>
                        </View>

                    </LinearGradient>
                    <LinearGradient
                        //#345196 #1F2F55
                        colors={['#1F2F55', '#345196']}
                        start={{ x: 1.5, y: 2, }}
                        end={{ x: 0.1, y: 2, }}
                        style={globalStyles.availableshowingContainer}>

                        <Text style={globalStyles.mainTitle}>Contact Us</Text>

                        <Text style={globalStyles.headerinputtitle}>Name</Text>
                        <TextInput style={globalStyles.textInputcontainer} placeholder="Enter your name here" />

                        <Text style={globalStyles.headerinputtitle}>Email</Text>
                        <TextInput style={globalStyles.textInputcontainer} placeholder="Enter your email here" />

                        <Text style={globalStyles.headerinputtitle}>Message</Text>
                        <TextInput style={globalStyles.textInputcontainer2} placeholder="Write your message here" />




                    </LinearGradient>
                </View>
                <Footer />
            </View>
        </ScrollView>
    )
}



