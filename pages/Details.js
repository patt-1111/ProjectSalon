// import React from 'react';
// import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
// import { Image } from 'react-native';
// import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"

// const Details = ({ navigation }) => {

//     return (
//         <View  >
//             <TextInput
//             placeholder="ค้นหา"
//             aligthItems="center"
//             style={styles.input}
//             />
//             <View>
//             <Image source={require('../assets/images/ผมยาวดัดลอนพร้อมหน้าม้าซีทรู.gif')}
//                 style={{ width: 225, height: 125, marginLeft: 100, marginRight: 100, marginTop: 10}}
                
//             />  
//             <Text style={{marginLeft: 100, fontSize: 16, marginTop: 5}}> ผมยาวดัดลอนพร้อมหน้าม้าซีทรู </Text>
//             </View>

//             <View>
//             <Image source={require('../assets/images/ผมบ๊อบสั้นตัดตรง.gif')}
//                // style={styles.images1}
                
//             />  
            
//             <Text style={{marginLeft: 35, fontSize: 16, marginTop: 5}}> ผมบ๊อบสั้นตัดตรง </Text>
//             </View>

//             <View>
//             <Image source={require('../assets/images/ผมยาวดัดหยิก.gif')}
//                // style={styles.images1}
                
//             />  
//             <Text style={{marginLeft: 35, fontSize: 16, marginTop: 5}}> ผมยาวดัดหยิก </Text>
//             </View>

//             <View>
//             <Image source={require('../assets/images/ผมประบ่า.gif')}
//                // style={styles.images2}
                
//             />  
//             <Text style={{marginLeft: 35, fontSize: 16, marginTop: 5}}> ผมประบ่า </Text>
//             </View>
            
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     input: {
//         // flex: ,
//         justifyContent: 'center',
//         alignItems: 'center',
//         // backgroundColor: '#FEA4B0', //FEA4B0
        
//         marginLeft: 20,
//         marginRight: 20,
//         marginTop: 20,
//         borderColor: '#D3D3D3',
//         backgroundColor: '#F6F6F6',
//         borderWidth: 1,
//         borderRadius: 15,
//         flexDirection: 'row',
//         justifyContent: 'space-between'
//     },
//     images1: {
//         width: 180, height: 100, marginLeft: 10, marginRight: 100, marginTop: 10, flexDirection: 'row',
//         justifyContent: 'space-between'
//     },
//     images2: {
//         width: 180, height: 100, marginLeft: 100, marginRight: 200, marginTop: 10, flexDirection: 'row',
//         justifyContent: 'space-between'
//     }
// })

// export default Details;


import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { Image } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"

const Details = ({ navigation }) => {

    return (
        <View style={styles.container} >
            <TextInput
            placeholder="ค้นหา"
            aligthItems="center"
            style={styles.input}
            />
            <View>
            <Image source={require('../assets/images/ผมยาวดัดลอนพร้อมหน้าม้าซีทรู.gif')}
                style={{ resizeMode: "contain", width: 225, height: 125}}
                
            />  
            <Text> ผมยาวดัดลอนพร้อมหน้าม้าซีทรู </Text>
            </View>

            <View>
            <Image source={require('../assets/images/ผมบ๊อบสั้นตัดตรง.gif')}
               style={{resizeMode: "repeat",width: 180, height: 100}}

                
            />  
            
            <Text > ผมบ๊อบสั้นตัดตรง </Text>
            </View>

            <View>
            <Image source={require('../assets/images/ผมยาวดัดหยิก.gif')}
               style={{resizeMode: "repeat",width: 180, height: 100}}
                
            />  
            <Text> ผมยาวดัดหยิก </Text>
            </View>

            <View>
            <Image source={require('../assets/images/ผมประบ่า.gif')}
               style={{resizeMode: "repeat",width: 180, height: 100}}
                
            />  
            <Text> ผมประบ่า </Text>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        // flex: ,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#FEA4B0', //FEA4B0
        
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        borderColor: '#D3D3D3',
        backgroundColor: '#F6F6F6',
        borderWidth: 1,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container: {
        
        justifyContent: "space-around",
        alignItems: "center",
        height: "100%",
        textAlign: "center"
      }
})

export default Details;