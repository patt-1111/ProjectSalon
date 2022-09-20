import React, { useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import Mybutton from './components/Mybutton';
// import QQSalon from './images/QQSalon';
//import Mytext from './components/Mytext';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'QSalonDatabase.db' });

const Homepage = ({ navigation }) => {
    useEffect(() => {
        db.transaction(function (txn) {
          txn.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='Customer'",
            "SELECT name FROM sqlite_master WHERE type='table' AND name='Salon'",
            "SELECT name FROM sqlite_master WHERE type='table' AND name='Book'",
            "SELECT name FROM sqlite_master WHERE type='table' AND name='Queue'",
            [],
            function (tx, res) {
              console.log('item:', res.rows.length);
              if (res.rows.length == 0) {
                txn.executeSql('DROP TABLE IF EXISTS Customer', []);
                txn.executeSql(
                  'CREATE TABLE IF NOT EXISTS Customer(member_id INTEGER PRIMARY KEY AUTOINCREMENT, username VARCHAR(50), cus_fullname VARCHAR(200), phone_num INT(11), email VARCHAR(50), password INT(10)',
                  'CREATE TABLE IF NOT EXISTS Salon(salon_name VARCHAR(100) PRIMARY KEY, S_fullname VARCHAR(200), S_tel INT(10), time_open TIME(6), time_close TIME(6), start_price INT(10), address TEXT, password INT(10)',
                  'CREATE TABLE IF NOT EXISTS Book(date DATE, time TIME PRIMARY KEY , queue_id INT(10) AUTOINCREMENT, member_id INT(10), serve_name VARCHAR(255)',
                  'CREATE TABLE IF NOT EXISTS Queue(queue_oder INTEGER PRIMARY KEY AUTOINCREMENT, queue_id INT(10), member_id INT(10), date DATE, time TIME(6) ,serve_name VARCHAR(255)',
                  []
                );
              }
            }
          );
        });
    },  []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container }>
                
            <Image source={require('../assets/images/QSalon.png')}
                style={styles.image}
            />
            
            <Mybutton
                title = "customer"
                customClick={() => navigation.navigate('LoginUser')}
            />

            </View>
        </SafeAreaView>



    );
}

const styles = StyleSheet.create({


    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FEA4B0', //FEA4B0
        

    },
    image: {
        width: 300,
        height: 300
    }
})

export default Homepage;