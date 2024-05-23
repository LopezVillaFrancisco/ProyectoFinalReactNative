import { StyleSheet, Text, Pressable } from 'react-native';
import React from 'react';

const SubmitButton = ({ onPress, title }) => {
  return ( 
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'lightblue',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold', 
  },
});
