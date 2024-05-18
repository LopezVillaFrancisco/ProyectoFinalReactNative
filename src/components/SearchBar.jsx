import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons'; 

const SearchBar = ({ onSearch = () => {}}) => {
  
    const [tecla, setTecla] = useState('')

    return (
    <View style={styles.container}> 
        <TextInput
            placeholder='Buscar...'
            value={tecla}
            onChangeText={setTecla}
            style={styles.textInput}
        /> 
        <Pressable style={styles.button} onPress={() => onSearch(tecla)}>
            <FontAwesome5 name="search" size={24} color="black" />
        </Pressable> 

    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'white',
        borderRadius: 20, 
        marginBottom: 20,
    }, 
    textInput:{
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
    }, 
    button:{
        marginLeft: 10
    }
})
