import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import { Image } from 'react-native';

const GPS = ({navigation}) => {
  
  return (
    <SafeAreaView style={{flex: 1}}>
        <Image source={require('../assets/images/GPS.jpg')}
            style={styles.image}
        />
      
    </SafeAreaView>
  );
};

export default GPS;

const styles = StyleSheet.create({
  image: {
      top: 0,
      left:0,
      width: 450,
      height: 600
  }
})