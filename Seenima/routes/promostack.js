import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from "../themes/color"
import { Image } from 'react-native';
import PromoScreen from '../screens/Promo';


function LogoTitle() {
    return (
      <Image
        style={{ width: 50, height: 50 }}
        source={require('../assets/Seenima1.png')}
      />
    );
  }

const Stack = createStackNavigator();

export default function PromoStack() {
    return (

        <Stack.Navigator
            initialRouteName='Promo Screen'
            screenOptions={{
                headerTintColor: '#444',
                headerTransparent: true,
                headerStyle: {
                    backgroundColor: colors.primaryGradient.primary,
                    height: 100
                }
            }}
        >

            <Stack.Screen
                name='Promo Screen'
                component={PromoScreen}
                options={{
                    headerTitle: () => <LogoTitle />
                }} />





        </Stack.Navigator>

    );
}