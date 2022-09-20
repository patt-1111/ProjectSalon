import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Myserve = (props) => {
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
    //alignItems: 'center',
    backgroundColor: '#F38D98', //F38D98
    color: '#ffffff',
    padding: 20, //ขนาดกล่องข้อความ
    marginTop: 5, //ความห่าง
    // marginLeft: 135,
    // marginRight: 135,
    //margin: 130,
    borderRadius: 35,
    marginBottom: 5,
    //  flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    left: 20,
    right: 20,
     fontSize: 18,
    
    
    

  },
  text: {
    color: '#ffffff',
    textAlign: "center",
     fontSize: 16,
  },
});

export default Myserve;