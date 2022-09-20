
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"

const Viewqueue = ({ navigation }) => {

    return (
           
            <View style={styles.view}  > 
                
                    <View style={styles.text}>
                        <Text style={{fontSize: 16, color: 'black',fontWeight: "bold"}}> ลำดับคิว </Text>
                        <Text style={{fontSize: 16, color: 'black',fontWeight: "bold"}}> รหัสคิว </Text>
                        <Text style={{fontSize: 16, color: 'black',fontWeight: "bold"}}> ชื่อ </Text>
                        <Text style={{fontSize: 16, color: 'black',fontWeight: "bold"}}> วัน/เวลา ที่จอง </Text>
                        <View style={styles.text1}>
                            <Text style={{fontSize: 16, color: 'gray',fontWeight: "bold"}}> 1 </Text>
                            <Text style={{fontSize: 16, color: 'gray',fontWeight: "bold", marginLeft: 50}}> 001 </Text>
                            <Text style={{fontSize: 16, color: 'gray',fontWeight: "bold", marginLeft: 19}}> หญิง </Text>
                            <Text style={{fontSize: 16, color: 'gray',fontWeight: "bold", marginLeft: 25}}> 18/12/2564 </Text>
                        </View>
                        <View style={styles.text3}>
                            <Text style={{fontSize: 16, color: 'gray',fontWeight: "bold"}}> 2 </Text>
                            <Text style={{fontSize: 16, color: 'gray',fontWeight: "bold", marginLeft: 50}}> 002 </Text>
                            <Text style={{fontSize: 16, color: 'gray',fontWeight: "bold", marginLeft: 19}}> โบว์ </Text>
                            <Text style={{fontSize: 16, color: 'gray',fontWeight: "bold", marginLeft: 25}}> 15/12/2564 </Text>
                        </View>
                            
                    </View>
                        <View style={styles.text2}>
                            <Text style={{fontSize: 16, color: 'gray',fontWeight: "bold"}}> 10.00 น. </Text>
                        </View>
                        <View style={styles.text4}>
                            <Text style={{fontSize: 16, color: 'gray',fontWeight: "bold"}}> 14.30 น. </Text>
                        </View>
               
                <Text style={{fontSize: 20,textAlign: "center", color: 'black',fontWeight: "bold",marginLeft: 125}}> แสดงคิว </Text>
            </View>  
        
    );
};

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        left: 20,
        right: 20,
    },
    text: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 50,
        left: 0,
        right: 0,
        
    },
    text1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 30,
        left: 25,
        right: 0,
    },
    text2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 100,
        left: 295,
        right: 0,
    },
    text3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 85,
        left: 25,
        right: 0,
    },
    text4: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 155,
        left: 295,
        right: 0,
    },
})

export default Viewqueue;