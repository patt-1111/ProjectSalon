import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'QSalonDatabase.db' });

const SignUpUser = ({ navigation }) => {
    let [username, setUserName] =useState('');
    let [cusFullname, setCusFullname] = useState('');
    let [phoneNum, setPhoneNum] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    let register_user = () => {
        console.log(username, cusFullname, phoneNum, email, password);

        if (!username) {
            alert('Please fill username');
            return;
        }
        if (!cusFullname) {
            alert('Please fill fullname');
            return;
        }
        if (!phoneNum) {
            alert('Please fill Tel');
            return;
        }
        if (!email) {
            alert('Please fill Contact Email');
            return;
        }
        if (!password) {
            alert('Please fill Password');
            return;
        }
        
        db.transaction(function (tx) {
            tx.executeSql(
                'INSERT INTO Customer (username, cus_fullname, phone_num, email, password) VALUES (?,?,?,?,?)',
                [username, cusFullname, phoneNum, email, password],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                      Alert.alert(
                        'Success',
                        'You are SignUp Successfully',
                        [
                          {
                            text: 'Ok',
                            onPress: () => navigation.navigate('Homepage'),
                          },
                        ],
                        { cancelable: false }
                      );
                    } else alert('SignUp Failed');
                }
            )
        }) 
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1 }}>
              <ScrollView keyboardShouldPersistTaps="handled">
                <KeyboardAvoidingView
                  behavior="padding"
                  style={{ flex: 1, justifyContent: 'space-between' }}>
                  <Mytextinput
                    placeholder="Name - Surname"
                    onChangeText={(cusFullname) => setCusFullname(cusFullname)}
                    style={{padding: 10,color: 'black'}}
                 />
                  <Mytextinput
                    placeholder="Name"
                    onChangeText={(username) => setUserName(username)}
                    style={{padding: 10,color: 'black'}}
                 />
                 <Mytextinput
                    placeholder="Tel."
                    onChangeText={(phoneNum) => setPhoneNum(phoneNum)}
                    maxLength={10}
                    keyboardType="numeric"
                    style={{padding: 10,color: 'black'}}
                />
                <Mytextinput
                    placeholder="Email"
                    onChangeText={(email) => setEmail(email)}
                    style={{padding: 10,color: 'black'}}
                />
                <Mytextinput
                    placeholder="Password"
                    onChangeText={(Password) => setPassword(Password)}
                    style={{textAlignVertical: 'top', padding: 10,color: 'black'}}
                />
                <View style={{marginTop: 30}}>
                    <Mybutton title="SignUp" customClick={() => navigation.navigate('LoginUser')}/>
                </View>
                </KeyboardAvoidingView>
              </ScrollView>
            </View>
          </View>
        </SafeAreaView>
      );
}

export default SignUpUser;