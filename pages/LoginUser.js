import React, { useState } from 'react';
import {
    View,
    ScrollView,
    KeyboardAvoidingView,
    Alert,
    SafeAreaView,
    TouchableOpacity,
    Text,
} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'QSalonDatabase.db' });

const LoginUser = ({ navigation }) => {
    let [phoneNum, setPhoneNum] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    let user_login = () => {
        console.log(phoneNum);
        setPassword({});
        db.transaction((tx) => {
          tx.executeSql(
            'SELECT * FROM Customer where member_id = ?',
            [phoneNum, password],
            (tx, results) => {
              var len = results.rows.length;
              console.log('len', len);
              if (len > 0) {
                setPassword(results.rows.item(0));
              } else {
                alert('No user found');
              }
            },
          );
        });
      };

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <ScrollView keyboardShouldPersistTaps="handled">
                    <KeyboardAvoidingView
                        behavior="padding"
                        style={{ flex: 1, justifyContent: 'space-between' }}
                        >
                        <TouchableOpacity onPress={() => navigation.navigate('SignUpUser')}>
                            <Text>
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                        
                        <Mytextinput
                            placeholder="Tel."
                            onChangeText={
                            (phoneNum) => setPhoneNum(phoneNum)
                            }
                            // maxLength={10}
                            keyboardType="numeric"
                            style={{ padding: 10 }}
                        />
                        <Mytextinput
                            placeholder="Password"
                            onChangeText={
                            (password) => setPassword(password)
                            }
                            maxLength={10}
                            keyboardType="numeric"
                            style={{ padding: 10 }}
                        />
                        <View style={{marginTop: 30}}>
                         <Mybutton title="Submit" customClick={() => navigation.navigate('Tabs')}/>
                         <Mybutton 
                            title="SignUp" 
                            customClick={() => navigation.navigate('SignUpUser')}
                            />
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>

        </SafeAreaView>
    );
};

export default LoginUser;
