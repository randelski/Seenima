import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import NowShowingStack from './nowshowingstack';
import HomeStack from './homestack.';
import PromoStack from './promostack';
import AboutStack from './aboutstack';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator  screenOptions={{ headerShown: false, tabBarActiveTintColor:'#33C5FF',tabBarInactiveTintColor: 'white', tabBarStyle: {backgroundColor : '#1F2F55'}   }}>
                <Tab.Screen name="Home" component={HomeStack} options={{tabBarIcon: (tabInfo) => {
                           return (
                            <MaterialCommunityIcons
                              name="home"
                              size={27}
                              color={tabInfo.focused ? '#33C5FF' : 'white'}/>
                          );
                        },
                      }}/>
                <Tab.Screen name="Now Showing" component={NowShowingStack}  options={{tabBarIcon: (tabInfo) => {
                           return (
                            <MaterialCommunityIcons 
                            name="movie-open-check-outline" 
                            size={27} 
                            color={tabInfo.focused ? '#33C5FF' : 'white'}
                          />
                        );
                      },
                }} />
                <Tab.Screen name="Promos" component={PromoStack} options={{tabBarIcon: (tabInfo) => {
                            return (
                              <MaterialCommunityIcons
                                name="ticket-percent-outline"
                                size={24}
                                color={tabInfo.focused ? '#33C5FF' : 'white'}
                              />
                            );
                          },
                        }} />
                <Tab.Screen name="About Us" component={AboutStack} options={{tabBarIcon: (tabInfo) => {
                            return (
                              <MaterialCommunityIcons
                                name="information"
                                size={24}
                                color={tabInfo.focused ? '#33C5FF' : 'white'}
                              />
                            );
                          },
                        }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}