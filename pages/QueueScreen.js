// import React,{ Component } from 'react';
// import { Platform, StyleSheet, Text, View, Dimensions,App} from 'react-native';
// // let {width} = Dimensions.get('window');
// // let widthTab = width /3;

// import { TabView, SceneMap } from 'react-native-tab-view';

// const TabView = ({children}) => (
//     <View 
//         style = {{
//             height: 50, 
//             width: 100, 
//             borderBottomWidth: 1, 
//             borderBottomColor: '#ddd',
//             justifyContent: "space-around",
//             alignItems:"center", 
//             flexDirection: "row", 
//         }}>

//         {children}
//     </View>
// );

// const TabView = ({title, active = false}) => (
//     <View  
//         style = {({ 
//             width: widthTab, 
//             height: 50,
//             justifyContent: "center", 
//             alignItems: "center",
//         }, active ? {borderBottomWidth: 2,borderBottomColor: 'red'}:{}
        
//         )}>
//         <Text>{title}</Text>
//     </View>
// )



// class QueueScreen extends Component {
//     static navigationOption ={
//         header : null
//     };

//     render(){
//         return (
//             <View style={{marginTop: 22}}>
//                 <Tebs>
//                     <Tab title = "คำขอ"/>
//                     <Tab title = "นัดหมาย" active ={true} />
//                     <Tab title = "ยกเลิกคิว"/>
//                     <Tab title = "สำเร็จ"/>
//                 </Tebs> 
//             </View>
//         );
//     }
// }

// export default QueueScreen;

// export default class QueueScreen extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             index: 0,
//             routes: [
//                 { key: 'คำขอ' , title: 'คำขอ' },
//                 { key: 'นัดหมาย' , title: 'นัดหมาย'}
//             ]
//         }
//     }

//     renderScene = ({ route }) => {
//         switch (route.key) {
//             case 'คำขอ':
//                 return <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />;
//             case 'อ':
//                 return <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />;
//         }
//     }
            
//     render() {
//         return(
//             <TabView
//                 navigationState={{ index: this.state.index, routes: this.state.routes }}
//                 renderScene={this.renderScene}
//                 onIndexChange={index=>this.setState({index})}
//                 initialLayout={{width: Dimensions.get('window').width}}
//             />
//         );
//     }
// }

// const styles = StyleSheet.create({
//     scene: {
//         flex: 1
//     }
// });

import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"


import Tabs from './Tabs';

import { Icon } from 'react-native-vector-icons/dist/FontAwesome';
import Mybutton from './components/Mybutton';
import MyTouch from './components/MyTouch';
const Queue = ({ navigation }) => {

    return (
        <View>
            <View >
                <Text style={styles.text}>ชื่อ   หญิง          รหัสคิว  001</Text>
                <Text style={styles.text}>บริการ   ตัดผม</Text>
                <Text style={styles.text}>   วันที่ 18/12/2564 </Text>
                <Text style={styles.text}>   เวลา 10.00 </Text>
            </View>
            {/* <Text>บริการ  ตัดผม</Text> */}
            
            <View style={styles.button}>
            <Mybutton  
                title = "แก้ไข"
                customClick={() => navigation.navigate('EditQueue')}/>
            <Mybutton 
                title = "ยกเลิก"
                customClick={() => navigation.navigate('Delete')}/>
            </View>
        
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        marginTop: 50
    },
    text: {
        fontSize: 16,
        color: 'black',
        fontWeight: "bold",
        top: 20,
        left: 10,
        right: 0,
        
    },
})

export default Queue;

// style={styles.view