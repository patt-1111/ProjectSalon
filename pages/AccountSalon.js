// import React, { useState } from 'react';
// import {
//   View,
//   ScrollView,
//   KeyboardAvoidingView,
//   Alert,
//   SafeAreaView,
//   Text,
// } from 'react-native';
// import Mytextinput from './components/Mytextinput';
// import Mybutton from './components/Mybutton';
// import { openDatabase } from 'react-native-sqlite-storage';

// var db = openDatabase({ name: 'QSalonDatabase.db' });

// const SignUpSalon = ({ navigation }) => {
//     let [salonName, setSalonName] =useState('');
//     let [Stel, setSTel] = useState('');
//     // let [email, setEmail] = useState('');
//     let [password, setPassword] = useState('');

//     let register_salon = () => {
//         console.log(salonName, Stel, password);

//         if (!salonName) {
//             alert('Please fill salon name');
//             return;
//         }
//         if (!Stel) {
//             alert('Please fill phone number');
//             return;
//         }
//         // if (!email) {
//         //     alert('Please fill Contact Email');
//         //     return;
//         // }
//         if (!password) {
//             alert('Please fill Password');
//             return;
//         }
        
//         db.transaction(function (tx) {
//             tx.executeSql(
//                 'INSERT INTO Salon (salon_name, S_Tel, password) VALUES (?,?,?)',
//                 [salonName, Stel, password],
//                 (tx, results) => {
//                     console.log('Results', results.rowsAffected);
//                     if (results.rowsAffected > 0) {
//                       Alert.alert(
//                         'Success',
//                         'You are SignUp Successfully',
//                         [
//                           {
//                             text: 'Ok',
//                             onPress: () => navigation.navigate('Homepage'),
//                           },
//                         ],
//                         { cancelable: false }
//                       );
//                     } else alert('SignUp Failed');
//                 }
//             )
//         }) 
//     }

//     return (
//         <SafeAreaView style={{ flex: 1 }}>
//           <View style={{ flex: 1, backgroundColor: 'white' }}>
//             <View style={{ flex: 1 }}>
//               <ScrollView keyboardShouldPersistTaps="handled">
//                 <KeyboardAvoidingView
//                   behavior="padding"
//                   style={{ flex: 1, justifyContent: 'space-between' }}>
//                   <Mytextinput
//                     placeholder="ชื่อร้าน"
//                     onChangeText={(salonName) => setSalonName(salonName)}
//                     style={{padding: 10,color: 'black'}}
//                  />
//                  <Mytextinput
//                     placeholder="เบอร์โทร."
//                     onChangeText={(Stel) => setSTel(Stel)}
//                     maxLength={10}
//                     keyboardType="numeric"
//                     style={{padding: 10,color: 'black'}}
//                 />
//                 {/* <Mytextinput
//                     placeholder="Email"
//                     onChangeText={(email) => setEmail(email)}
//                     style={{padding: 10,color: 'black'}}
//                 /> */}
//                 <Mytextinput
//                     placeholder="ราคาเริ่มต้น"
//                     onChangeText={(password) => setPassword(password)}
//                     style={{textAlignVertical: 'top', padding: 10,color: 'black'}}
//                 />
//                 <Mytextinput
//                     placeholder="เวลาเปิด"
//                     onChangeText={(password) => setPassword(password)}
//                     style={{textAlignVertical: 'top', padding: 10,color: 'black'}}
//                 />
//                 <Mytextinput
//                     placeholder="เวลาปิด"
//                     onChangeText={(password) => setPassword(password)}
//                     style={{textAlignVertical: 'top', padding: 10,color: 'black'}}
//                 /><Mytextinput
//                 placeholder="บริการ"
//                 onChangeText={(password) => setPassword(password)}
//                 style={{textAlignVertical: 'top', padding: 10,color: 'black'}}
//             />
//                 <View style={{marginTop: 30}}>
//                     <Mybutton title="บันทึก" />
//                 </View>
//                 </KeyboardAvoidingView>
//               </ScrollView>
//             </View>
//           </View>
//         </SafeAreaView>
//       );
// }

// export default SignUpSalon;


import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, ImageBackground, StyleSheet, TextInput} from 'react-native';
import { Image } from 'react-native';
import { Button } from 'react-native-vector-icons/dist/FontAwesome';
import Mybutton from './components/Mybutton';
import Myserve from './components/Myserve';
import Mytextinput from './components/Mytextinput';

const Account_User = ({navigation}) => {
  
  return (
    <SafeAreaView style={{flex: 1}}>
        
            <View>
                <Image source={require('../assets/images/ทะเล.jpg')}
                    style={styles.image}
                />  
                <View>
                <Image source={require('../assets/images/Profile.gif')}
                        style={styles.image1}
                    />  
                    <Text style={{fontSize: 20, textAlign: 'center', color: 'black',fontWeight: "bold", top:30, right: 90}}>
                        โบว์
                    </Text>
                </View>
                <Text style={styles.button1}>
                    <Text>ข้อมมูลร้าน</Text>
                    <Text>               คลังภาพ</Text>
                    <Text>                   ช่วยเหลือ</Text>
                </Text>
                <Text style={styles.text}></Text>
                
                <View >
                  <Text style={{fontSize: 17, textAlign: 'center', color: 'black',fontWeight: "bold", top: -190, left: -5 }}>
                <Text>ชื่อร้าน                       </Text>
                    <Text style={{fontSize: 17, textAlign: 'center', color: '#bdbdbd',fontWeight: "bold", top: -190, left: -5 }}>
                    <Text>                             โบว์บิวตี้</Text>
                    </Text>
                </Text> 
                <Text style={styles.text1}></Text>
                </View>
             
                 <Text style={{fontSize: 16, textAlign: 'center', color: 'black',fontWeight: "bold", top: -200, left: -5 }}>
                <Text>เบอร์โทร                   </Text>
                    <Text style={{fontSize: 17, textAlign: 'center', color: '#bdbdbd',fontWeight: "bold", top: -130, left: -5 }}>
                        <Text>                        06-xxxxxxxx</Text>
                    </Text>
                </Text>
                <Text style={styles.text2}></Text>

               <Text style={{fontSize: 17, textAlign: 'center', color: 'black',fontWeight: "bold", top: -210, left: -5 }}>
                <Text>ที่ตั้ง        </Text>
                    <Text style={{fontSize: 17, textAlign: 'center', color: '#bdbdbd',fontWeight: "bold", top: -245 }}>
                        <Text>                   xxx ถนนxxx ต.xxx จ.xxx</Text>
                    </Text>
                </Text>
                <Text style={styles.text3}></Text>

                <Text style={{fontSize: 16, textAlign: 'center', color: 'black',fontWeight: "bold", top: -220, left: -5 }}>
                <Text>ราคาเริ่มต้น                   </Text>
                    <Text style={{fontSize: 17, textAlign: 'center', color: '#bdbdbd',fontWeight: "bold", top: -245 }}>
                        <Text>                                     50</Text>
                    </Text>
                </Text>
                <Text style={styles.text4}></Text>

               <Text style={{fontSize: 17, textAlign: 'center', color: 'black',fontWeight: "bold", top: -235, left: -5 }}> 
                <Text>เวลาเปิด                      </Text>
                    <Text style={{fontSize: 17, textAlign: 'center', color: '#bdbdbd',fontWeight: "bold", top: -245 }}>
                        <Text>                                8.00</Text>
                    </Text>
                </Text>
                <Text style={styles.text5}></Text>

                <Text style={{fontSize: 17, textAlign: 'center', color: 'black',fontWeight: "bold", top: -240, left: -5 }}> 
                <Text>เวลาปิด                      </Text>
                    <Text style={{fontSize: 17, textAlign: 'center', color: '#bdbdbd',fontWeight: "bold", top: -240 }}>
                        <Text>                                18.00</Text>
                    </Text>
                </Text>
                <Text style={styles.text6}></Text>

                <Text  style={{fontSize: 17, textAlign: 'left', color: 'black',fontWeight: "bold", top: -250 }}>คุณให้บริการอะใรบ้าง</Text>
                
                <View> 
                  {/* <Myserve title='ตัดผม'/> */}
                  <Mytextinput
                    placeholder="บริการ"
                    onChangeText={(username) => setUserName(username)}
                    style={{padding: 10,color: 'black', top: -280}}
                    // onChangeText='black'
                 />
                </View>
                <View style={styles.button}>
                <Mybutton title="บันทึก" button=" marginTop: 50 "/>
                </View>

            </View>
    </SafeAreaView>
  );
};

export default Account_User;

const styles = StyleSheet.create({
  image: {
    width: 460,
    height: 200,
    position: 'absolute',
   
  },
  image1: {
    top: 30,
    left: 70,
    width: 90,
    height: 90,
    bottom:20,    
  },
  button1: {
    alignItems: 'center',
    backgroundColor: '#bdbdbd',
    color: 'black',
    padding: 10,
    marginTop: 200,
    //  marginLeft: 0,
    //  marginRight: 0,
    marginBottom: 20,
    fontSize: 18,
    fontWeight: "bold",
    flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        // left: 20,
        // right: 20,
  },
  text: {
    top: -50,
    borderBottomWidth: 5,
    borderBottomColor: '#F38D98',
    margin: 150,
    left: -150,
    // borderBottomLeft: 10
  },
  text1: {
    top: -205,
    borderBottomWidth: 1.5,
    borderBottomColor: '#bdbdbd',
  },
  text2: {
    top: -215,
    borderBottomWidth:  1.5,
    borderBottomColor: '#bdbdbd',
  },
  text3: {
    top: -225,
    borderBottomWidth:  1.5,
    borderBottomColor: '#bdbdbd',
  },
  text4: {
    top: -235,
    borderBottomWidth:  1.5,
    borderBottomColor: '#bdbdbd',
  },
  text5: {
    top: -245,
    borderBottomWidth:  1.5,
    borderBottomColor: '#bdbdbd',
  },
  text6: {
    top: -255,
    borderBottomWidth:  1.5,
    borderBottomColor: '#bdbdbd',
  },
  input: {
    fontWeight: "bold",
    flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
  },
  button: {
    marginTop: -280
  },
  // contrinner: {
  //   fontWeight: "bold",
  //   flexDirection: 'row',
  //       justifyContent: 'space-between',
  //       position: 'absolute',
  // }

  
  
  
})