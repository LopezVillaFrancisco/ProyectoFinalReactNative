import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

 const TopBar =() => {
  return (
    <View style={styles.background}>
      <Text style={styles.titleText}>Shoes INC</Text>
    </View>
  )
}  

const styles = StyleSheet.create({
    background: {
        width:'100%', 
        height: '10%',
      alignItems: "center", 
      justifyContent: "center", 
      backgroundColor:'lightblue',
    }, 
    titleText:{
        fontSize:30, 
    }
  });

export default TopBar