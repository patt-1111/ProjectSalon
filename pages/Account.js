import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, ImageBackground, StyleSheet} from 'react-native';
import { Image } from 'react-native';
import Mybutton from './components/Mybutton';

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
                    <Text style={{fontSize: 25, textAlign: 'center', color: 'black',fontWeight: "bold", top:30, right: 90}}>
                        หญิง
                    </Text>
                </View>
                <Text style={styles.button1}>
                    <Text>    ข้อมูลส่วนตัว              </Text>
                    <Text>  ช่วยเหลือ</Text>
                </Text>
                <Text style={styles.text}></Text>

                <Text style={{fontSize: 18, textAlign: 'center', color: 'black',fontWeight: "bold", top: -245, left: -5 }}>
                <Text>รหัสสมาชิก                   </Text>
                    <Text style={{fontSize: 18, textAlign: 'center', color: '#bdbdbd',fontWeight: "bold", top: -245, left: -5 }}>
                        <Text>               A001</Text>
                    </Text>
                </Text>
                <Text style={styles.text1}></Text>

                <Text style={{fontSize: 18, textAlign: 'center', color: 'black',fontWeight: "bold", top: -245, left: -5 }}>
                <Text>ชื่อ                   </Text>
                    <Text style={{fontSize: 18, textAlign: 'center', color: '#bdbdbd',fontWeight: "bold", top: -245 }}>
                        <Text>                           หญิง</Text>
                    </Text>
                </Text>
                <Text style={styles.text2}></Text>

                <Text style={{fontSize: 18, textAlign: 'center', color: 'black',fontWeight: "bold", top: -235, left: -5 }}>
                <Text>ชื่อ-นามสกุล         </Text>
                    <Text style={{fontSize: 18, textAlign: 'center', color: '#bdbdbd',fontWeight: "bold", top: -245 }}>
                        <Text>               หญิง  ใจดี</Text>
                    </Text>
                </Text>
                <Text style={styles.text3}></Text>

                <Text style={{fontSize: 18, textAlign: 'center', color: 'black',fontWeight: "bold", top: -228, left: -5 }}>
                <Text>เบอร์โทร         </Text>
                    <Text style={{fontSize: 18, textAlign: 'center', color: '#bdbdbd',fontWeight: "bold", top: -245 }}>
                        <Text>                 09-xxxxxxxx</Text>
                    </Text>
                </Text>
                <Text style={styles.text4}></Text>

                <Text style={{fontSize: 18, textAlign: 'center', color: 'black',fontWeight: "bold", top: -215, left: -5 }}>
                <Text>E-mail        </Text>
                    <Text style={{fontSize: 18, textAlign: 'center', color: '#bdbdbd',fontWeight: "bold", top: -245 }}>
                        <Text>                 xxxx.gmail.com</Text>
                    </Text>
                    {/* <Mybutton title="Summit"/> */}
                </Text>
                <Text style={styles.text5}></Text>
                

            </View>
    </SafeAreaView>
  );
};

export default Account_User

const styles = StyleSheet.create({
  image: {
    width: 460,
    height: 250,
    position: 'absolute',
   
  },
  image1: {
    top: 30,
    left: 40,
    width: 100,
    height: 100,
    bottom:20,    
  },
  button1: {
    alignItems: 'center',
    backgroundColor: '#bdbdbd',
    color: 'black',
    padding: 15,
    marginTop: 117,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    top: -153,
    borderBottomWidth: 5,
    borderBottomColor: '#F38D98',
    margin: 110,
    left: -90,
  },
  text1: {
    top: -255,
    borderBottomWidth: 1.5,
    borderBottomColor: '#bdbdbd',
  },
  text2: {
    top: -250,
    borderBottomWidth:  1.5,
    borderBottomColor: '#bdbdbd',
  },
  text3: {
    top: -240,
    borderBottomWidth:  1.5,
    borderBottomColor: '#bdbdbd',
  },
  text4: {
    top: -235,
    borderBottomWidth:  1.5,
    borderBottomColor: '#bdbdbd',
  },
  text5: {
    top: -225,
    borderBottomWidth:  1.5,
    borderBottomColor: '#bdbdbd',
  },
  
  
})