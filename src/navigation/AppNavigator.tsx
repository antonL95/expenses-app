import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme} from "@rneui/themed";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
    const { theme } = useTheme();
    return (
        <NavigationContainer
            theme={{
                colors: {
                    primary: theme.colors.primary,
                    background: theme.colors.background,
                    card: theme.colors.white,
                    text: theme.colors.black,
                    border: theme.colors.divider,
                    notification: theme.colors.success,
                },
                dark: theme.mode === 'dark',
            }}
        >
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName: string;

                        switch (route.name) {
                            case 'Home':
                                iconName = focused ? 'home' : 'home-outline';
                                break;
                            case 'Details':
                                iconName = focused ? 'list' : 'list-outline';
                                break;
                            default:
                                iconName = 'alert-circle-outline';
                                break;
                        }

                        return <Icon name={iconName} size={size} color={color}/>;
                    },
                    headerShown: false,
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="Details" component={DetailScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
