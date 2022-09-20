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

const SignUpSalon = ({ navigation }) => {
    let [salonName, setSalonName] =useState('');
    let [Stel, setSTel] = useState('');
    // let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    let register_salon = () => {
        console.log(salonName, Stel, password);

        if (!salonName) {
            alert('Please fill salon name');
            return;
        }
        if (!Stel) {
            alert('Please fill phone number');
            return;
        }
        // if (!email) {
        //     alert('Please fill Contact Email');
        //     return;
        // }
        if (!password) {
            alert('Please fill Password');
            return;
        }
        
        db.transaction(function (tx) {
            tx.executeSql(
                'INSERT INTO Salon (salon_name, S_Tel, password) VALUES (?,?,?)',
                [salonName, Stel, password],
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
                    placeholder="Salon Name"
                    onChangeText={(salonName) => setSalonName(salonName)}
                    style={{padding: 10,color: 'black'}}
                 />
                 <Mytextinput
                    placeholder="Tel."
                    onChangeText={(Stel) => setSTel(Stel)}
                    maxLength={10}
                    keyboardType="numeric"
                    style={{padding: 10,color: 'black'}}
                />
                {/* <Mytextinput
                    placeholder="Email"
                    onChangeText={(email) => setEmail(email)}
                    style={{padding: 10,color: 'black'}}
                /> */}
                <Mytextinput
                    placeholder="Password"
                    onChangeText={(password) => setPassword(password)}
                    style={{textAlignVertical: 'top', padding: 10,color: 'black'}}
                />
                <View style={{marginTop: 30}}>
                    <Mybutton title="SignUp" customClick={() => navigation.navigate('LoginSalon')}/>
                </View>
                </KeyboardAvoidingView>
              </ScrollView>
            </View>
          </View>
        </SafeAreaView>
      );
}

export default SignUpSalon;