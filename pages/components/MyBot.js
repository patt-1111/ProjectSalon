import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const MyBot = (props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      // style={styles.button2}
      onPress={props.customClick}>
      <Text style={styles.text}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#F38D98', //F38D98
    color: 'black',
    padding: 15, //ขนาดกล่องข้อความ
    marginTop: 16, //ความห่าง
    marginLeft: 35,
    marginRight: 35,
    //margin: 130,
    borderRadius: 45,
    marginBottom: 20,
    //  flexDirection: 'row',
    // justifyContent: 'space-between',
    //  fontSize: 18,
    
    
    

  },
  text: {
    color: '#ffffff',
    // textAlign: "center",
    //  fontSize: 16,
  },
});

export default MyBot;