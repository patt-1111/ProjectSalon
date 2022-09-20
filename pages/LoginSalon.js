import React,{ useState } from 'react';
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

const LoginSalon = ({ navigation }) => {
    let [Stel, setSTel] = useState('');
    // let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    return (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1 }}>
              <ScrollView keyboardShouldPersistTaps="handled">
                <KeyboardAvoidingView
                  behavior="padding"
                  style={{ flex: 1, justifyContent: 'space-between' }}>
                   <Mytextinput
                      placeholder="Tel."
                      onChangeText={
                      (Stel) => setSTel(Stel)
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
                      <Mybutton title="Submit" customClick={() => navigation.navigate('MainScreen')}/>
                      <Mybutton 
                        title="SignUp" 
                        customClick={() => navigation.navigate('SignUpSalon')}
                      />
                    </View>
                </KeyboardAvoidingView>
              </ScrollView>
            </View>
          </View>
        </SafeAreaView>
      );
}

export default LoginSalon;