import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from "../themes/color"
import { Image } from 'react-native';

import NowShowingScreen from '../screens/NowShowing';
import ScheduleSelectionScreen from '../screens/ScheduleSelection';
import SeatSelectionScreen from '../screens/SeatSelection';
import PaymentDetailsScreen from '../screens/PaymentDetails';
import TicketScreen from '../screens/Ticket';


function LogoTitle() {
    return (
        <Image
            style={{ width: 50, height: 50 }}
            source={require('../assets/Seenima1.png')}
        />
    );
}



const Stack = createStackNavigator();

export default function HomeStack() {
    return (

        <Stack.Navigator
            initialRouteName='Now Showing Screen'
            screenOptions={{
                headerTintColor: 'white',
                headerTransparent: true,

                headerStyle: {
                    backgroundColor: colors.primaryGradient.primary,
                    height: 100
                }
            }}
        >

            <Stack.Screen
                name='Now Showing Screen'
                component={NowShowingScreen}
                options={{
                    title: 'Now Showing',
                    headerTitle: () => <LogoTitle />
                }} />

            <Stack.Screen name='Schedule Selection Screen' component={ScheduleSelectionScreen}
                options={{ title: 'Schedule Selection', headerTitle: () => <LogoTitle /> }} />

            <Stack.Screen name='Seat Selection Screen' component={SeatSelectionScreen}
                options={{ title: 'Seat Selection', headerTitle: () => <LogoTitle /> }} />

            <Stack.Screen name='Payment Details Screen' component={PaymentDetailsScreen}
                options={{ title: 'Payment Details', headerTitle: () => <LogoTitle /> }} />

            <Stack.Screen name='Ticket Screen' component={TicketScreen}
                options={{ title: 'Ticket Screen', headerTitle: () => <LogoTitle /> }} />



        </Stack.Navigator>

    );
}