import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"


// import Tabs from '../navigation/tabs';

import { Icon } from 'react-native-vector-icons/dist/FontAwesome';
import Mybutton from './components/Mybutton';
import MyTouch from './components/MyTouch';



const MainScreen = ({ navigation }) => {

    return (
        <View >
        <TouchableOpacity onPress={() => navigation.navigate('BookQueue')}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 20
            }}>       
            <Text style={styles.tab}>
            Queue</Text>
            <Text style = {{
                fontSize:20,color:'#a2a2db', paddingHorizontal:15
            }} >....</Text>
            {/* <Text style={{
                fontSize:20, fontFamily:"RobotoBold", color:"black", marginLeft: 35,
            }}>
            AA</Text> */}
            {/* <Tabs /> */}
            {/* <Icon name='remove' size={20} color='blue' /> */}
            </View>
            {/* <Text style={styles.tab ,{flexDirection: 'row',justifyContent: 'space-between'}}>
            Queue</Text>
             */}
             
            
        </TouchableOpacity>
        <Mybutton 
        title = "Book"
        customClick={() => navigation.navigate('BookQueue')}/>
        <Mybutton 
        title = "View"
        customClick={() => navigation.navigate('View')}/>
        <Mybutton 
        title = "Details"
        customClick={() => navigation.navigate('Details')}/>
         <Mybutton 
        title = "GPS"
        customClick={() => navigation.navigate('GPS')}/>
        <Mybutton 
        title = "MyQ"
        customClick={() => navigation.navigate('QueueScreen')}/>
         <Mybutton 
        title = "Chat"
        customClick={() => navigation.navigate('ChatScreen')}/>
        <Mybutton 
        title = "Account"
        customClick={() => navigation.navigate('Account')}
        // customClick={() => navigation.navigate('AccountSalon')}
        />
        <TouchableOpacity onPress={() => navigation.navigate('AccountSalon')}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 20
            }}>       
            <Text style={styles.tab}>
            AccountSalon</Text>
            <Text style = {{
                fontSize:20,color:'#a2a2db', paddingHorizontal:15
            }} >....</Text>
            </View>
        </TouchableOpacity>
                
        
        </View> 
        
        // <SafeAreaView style={{ flex: 1 }}>
        //     <View style={{
        //     flexDirection: 'row',
        //     alignItems: 'center',
        //     paddingHorizontal: 5
        //     }}>
        //     {/* <Image source={require('../assets/images/QSalon.png')}
        //         style={styles.image}
        //     />
        //      */}
        //     <Mybutton
        //         title = "customer"
        //         customClick={() => navigation.navigate('View')}
        //     />
        //     <Mybutton 
        //         title = "salon"
        //         customClick={() => navigation.navigate('QueueScreen')}
                
        //     />
        //     <MyTouch 
        //         title = "BookQueue"
        //         customClick={() => navigation.navigate('QueueScreen')}
        //     />
        //     </View>
        // </SafeAreaView>
       
        
    );
};

const styles = StyleSheet.create({
    tab: {
        color: "black",
        fontSize: 15,
        marginTop: 50,
        marginLeft: 50,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',


    },
    icon: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    }
});

export default MainScreen;