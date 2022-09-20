import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert, SafeAreaView, Text, Image, Button, StyleSheet,} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import SelectDropdown from 'react-native-select-dropdown';
import { Dropdown } from 'react-native-material-dropdown';
import MyBot from './components/MyBot';
import DatePicker from 'react-native-date-picker'
import DateTimePicker from '@react-native-community/datetimepicker';

import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'QSalonDatabase.db' });

const BookQueue = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  

  const countries = ["ตัดผม", "ยืดผม", "ทำเล็บ", "สระผม"]

    return (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1 }}>
              <ScrollView keyboardShouldPersistTaps="handled">
                <KeyboardAvoidingView
                  behavior="padding"
                  style={{ flex: 1, justifyContent: 'space-between' }}>
                   <Image source={require('../assets/images/ทรงผม.png')}
                    style={{ width: 150, height: 150, marginLeft: 120, marginRight: 120, marginTop: 10}}
                   />    
                  <Mytextinput
                    // title = "ชื่อผู้ใช้บริการ"
                    placeholder="ชื่อผู้ใช้บริการ"
                    onChangeText={(cusFullname) => setCusFullname(cusFullname)}
                    style={{padding: 10,color: 'black', fontSize: 17,}}
                 />
                 <View style={{marginLeft: 100, padding: 15, color: "#778899"}}>
                  <SelectDropdown
                    data={countries}
                    onSelect={(selectedItem, index) => {
                      console.log(selectedItem, index)
                    }}
                  />
                  </View>
                 {/* <Button title="เวลา"
                    //onChangeText={(phoneNum) => setPhoneNum(phoneNum)}
                    maxLength={10}
                    keyboardType="numeric"
                    style={{padding: 10,color: 'black', fontSize: 17,}}
                />
                <Mytextinput
                    placeholder="วันที่"
                    onChangeText={(email) => setEmail(email)}
                    style={{padding: 10,color: 'black', fontSize: 17,}}
                /> */}
                <View style={styles.button}>
                  <Button onPress={showDatepicker} title="วันที่" color='#778899' top='15'/>
                </View>
                <View style={styles.button}>
                  <Button onPress={showTimepicker} title="เวลา" color='#778899'/>
                </View>
                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                  />
                )}
                
                <View style={{marginTop: 30}}>
                    <Mybutton title="จองคิว" />
                </View>
                </KeyboardAvoidingView>
              </ScrollView>
            </View>
          </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({


  button: {
    backgroundColor: '778899',
    color: '#ffffff',
    padding: 10, //ขนาดกล่องข้อความ
    marginTop: 5, //ความห่าง
    marginLeft: 35,
    marginRight: 35,
    //margin: 130,
    borderRadius: 40,
    marginBottom: 5,
    //  flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: '16'

  },
})

export default BookQueue