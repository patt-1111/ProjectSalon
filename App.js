import 'react-native-gesture-handler';

import * as React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import Tabs from './pages/Tabs';
import Homepage from './pages/Homepage'
import LoginUser from './pages/LoginUser'
import SignUpUser from './pages/SignUpUser'

const Stack = createStackNavigator();

function App (){

  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headersShown: false
        }}
        initialRouteName="Homepage">

        
        <Stack.Screen
          name="Homepage"
          component={Homepage}
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
        <Stack.Screen
         name="LoginUser"
         component={LoginUser}
         options={{
            title: 'Login', //Set Header Title
            headerStyle: {
              backgroundColor: '#FEA4B0', //Set Header color
              
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
              justifyContent: 'center'
            },
            
          }}
        />
         <Stack.Screen
         name="SignUpUser"
         component={SignUpUser}
         options={{
            title: 'Sign Up', //Set Header Title
            headerStyle: {
              backgroundColor: '#FEA4B0', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
              justifyContent: 'center'
            },
          }}
        />
        <Stack.Screen name="Tabs" component={Tabs} />

      {/*  <Stack.Screen
          name="LoginSalon"
          component={LoginSalon}
          options={{
            title: 'Login', //Set Header Title
            headerStyle: {
              backgroundColor: '#FEA4B0', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
         name="SignUpSalon"
         component={SignUpSalon}
         options={{
            title: 'Sign Up', //Set Header Title
            headerStyle: {
              backgroundColor: '#FEA4B0', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
              justifyContent: 'center'
            },
          }}
        />
        
        <Stack.Screen
          name="BookQueue"
          component={BookQueue}
          options={{
            title: 'BookQueue', //Set Header Title
            headerStyle: {
              backgroundColor: '#FEA4B0', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="View"
          component={Viewqueue}
          options={{
            title: 'View', //Set Header Title
            headerStyle: {
              backgroundColor: '#FEA4B0', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        
        
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: 'Detail', //Set Header Title
            headerStyle: {
              backgroundColor: '#FEA4B0', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="EditQueue"
          component={EditQueue}
          options={{
            title: 'Edit', //Set Header Title
            headerStyle: {
              backgroundColor: '#FEA4B0', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Delete"
          component={Delete}
          options={{
            title: 'Delete', //Set Header Title
            headerStyle: {
              backgroundColor: '#FEA4B0', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
         
        <Stack.Screen
          name="GPS"
          component={GPS}
          options={{
            title: 'GPS', //Set Header Title
            headerStyle: {
              backgroundColor: '#FEA4B0', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="AccountSalon"
          component={AccountSalon}
          options={{
            title: 'Account_Salon', //Set Header Title
            headerStyle: {
              backgroundColor: '#FEA4B0', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        /> */}

      </Stack.Navigator> 
      
    </NavigationContainer>
  );
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

export default App;