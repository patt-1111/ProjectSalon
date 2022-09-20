import React, {useState} from 'react';
import {Text, View, SafeAreaView, Button, StyleSheet} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import MyBot from './components/MyBot';
import {openDatabase} from 'react-native-sqlite-storage';



const ChatScreen = ({navigation}) => {

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {/* <Text style={{fontSize: 20, textAlign: 'center', color: 'black',fontWeight: "bold"}}>
            Messages    
        </Text> */}
        <View style={{flex: 1}}>    
            <View style={ {marginLeft:  60, marginTop: 10}}>
                <MyBot  title="ทำค่ะ ผมยาวราคาแพงหน่อยนะคะ" />
            </View>
            <View style={{ marginRight: 100}}>
                <MyBot title="ผมประบ่าคะ ราคาปกติได้มั๊ยคะ"  />
            </View>
            <View style={{marginLeft:  100, marginBottom: 250}}>
                <MyBot title="โอเคค่ะ จองคิวได้เลย"  />
            </View>
            <View style={{marginLeft:  0, marginRight: 0}}>
            <Mytextinput
                placeholder="พิมพ์ข้อความที่นี่                                             -->"
                style={{textAlignVertical: 'top', padding: 10,color: 'black', fontSize:15}}
              />
            </View>
            
        </View>
        
          
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({


    button: {
        alignItems: 'center',
    backgroundColor: '#F38D98',
    color: '#ffffff',
    // padding: 15,
    // marginTop: 16,
    // marginLeft: 35,
    // marginRight: 35,
    // marginBottom: 20,
    borderRadius: 45,
   // fontSize: 30,
        

    },
})


export default ChatScreen;




