import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import EventScreen from './screens/EventScreen';
import ToolScreen from './screens/ToolScreen';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'About') {
                iconName = focused ? 'information-circle' : 'information-circle-outline';
            } else if ( route.name === 'Event' ) {
                iconName = focused ? 'briefcase' : 'briefcase-outline';
            } else if ( route.name === 'Tools' ) {
                iconName = focused ? 'hammer' : 'hammer-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'slateblue',
          tabBarInactiveTintColor: '#777',
          tabBarStyle: {
            display: 'flex',
          },
        })}
      >
        <Tab.Screen name="Home" component={ HomeScreen } options={{ headerShown: false }} />
        <Tab.Screen name="Event" component={ EventScreen } options={{ headerShown: false }} />
        <Tab.Screen name="Tools" component={ ToolScreen } options={ { headerShown: false } } />
        <Tab.Screen name="About" component={ AboutScreen } options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;