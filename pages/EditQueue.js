import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
  StyleSheet,
  Button,
} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import DateTimePicker from '@react-native-community/datetimepicker';
import { openDatabase } from 'react-native-sqlite-storage';
import { exp } from 'react-native/Libraries/Animated/Easing';

var db = openDatabase({ name: 'QSalonDatabase.db' });
const EditQueue = ({ navigation }) => {

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


    return (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1 }}>
              <ScrollView keyboardShouldPersistTaps="handled">
                <KeyboardAvoidingView
                  behavior="padding"
                  style={{ flex: 1, justifyContent: 'space-between' }}>
                      
                  <Mytextinput
                    // title = "ชื่อผู้ใช้บริการ"
                    placeholder="ชื่อผู้ใช้บริการ"
                    onChangeText={(cusFullname) => setCusFullname(cusFullname)}
                    style={{padding: 10,color: 'black'}}
                 />
                  <Mytextinput
                    placeholder="เลือกบริการ"
                    onChangeText={(username) => setUserName(username)}
                    style={{padding: 10,color: 'black'}}
                 />
                 <View style={styles.button}>
                  <Button onPress={showDatepicker} title="วันที่" color='#778899' top='20'/>
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
export default EditQueue;

