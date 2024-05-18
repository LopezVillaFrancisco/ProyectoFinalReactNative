import { StyleSheet, View } from 'react-native'
import React from 'react'

const Card = ({children,style}) => {
  return (
    <View style={{...styles.container,...style}}>
        {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderWidth: 1,
        borderColor: 'white',
        marginBottom: 4,
        borderRadius: 4,
        width: 300, 
        alignItems: 'center',
      }, 
})