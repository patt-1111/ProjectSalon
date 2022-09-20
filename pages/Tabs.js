import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './MainScreen';
import QueueScreen from './QueueScreen';
import ChatScreen from './ChatScreen';
import Account from './Account';

const Stack = createBottomTabNavigator();
const Tab = createBottomTabNavigator();

const MainStackScreen = ({navigation}) => {
    return(
    <Stack.Navigator
        screenOptions={{
        headersShown: false
      }}
      initialRouteName="Homepage"
    >
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            title: '', //Set Header Title
            
            
          }}
        />
    </Stack.Navigator>
    );
};

const QueueStackScreen = ({navigation}) => {
    return(
    <Stack.Navigator>
        <Stack.Screen
          name="Queue"
          component={QueueScreen}
          options={{
            title: 'MyQ', //Set Header Title
            headerStyle: {
              backgroundColor: '#FEA4B0', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
    </Stack.Navigator>
    );
};

const ChatStackScreen = ({navigation}) => {
    return (
    <Stack.Navigator>
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            title: '', //Set Header Title
            headerStyle: {
              backgroundColor: '#FEA4B0', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
    </Stack.Navigator>
    );
}

const AccountStack = ({navigation}) => {
    return (
    <Stack.Navigator>
        <Stack.Screen
          name="Account"
          component={Account}
          options={{
            title: '', //Set Header Title
            headerStyle: {
              backgroundColor: '#FEA4B0', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
    </Stack.Navigator>
    );
}

const Tabs = () => {
    return (
            <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow
                }
            }}
        >
            <Tab.Screen name="MainScreen" component={MainStackScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                        <Image
                            source={require('../assets/icons/home.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>Home</Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name="Queue" component={QueueStackScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                        <Image
                            source={require('../assets/icons/Q.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>Queue</Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name="Chat" component={ChatStackScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 1}}>
                        <Image
                            source={require('../assets/icons/chat.png')}
                            resizeMode='contain'
                            style={{
                                width: 35,
                                height: 35,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>Chat</Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name="Account" component={AccountStack} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                        <Image
                            source={require('../assets/icons/account.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>AccountStack</Text>
                    </View>
                ),
            }}/>
        </Tab.Navigator>
    )   
}
const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DFD',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})

export default Tabs;

