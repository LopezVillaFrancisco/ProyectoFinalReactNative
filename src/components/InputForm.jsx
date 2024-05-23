import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const InputForm = ({
    label,
    onChange,
    error = '',
    isSecure = false, 
    placeholder
}) => { 
    const [input, setInput] = useState(''); 

    const onChangeText = (text) => {
        setInput(text);
        onChange(text);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>  
            <TextInput 
                style={styles.input}
                value={input}
                onChangeText={onChangeText} 
                secureTextEntry={isSecure} 
                placeholder={placeholder}
            />
        {error ? <Text style={styles.error}>{error}</Text> : null} 
        </View>
    );
}

export default InputForm

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: 'black',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    error: {
        marginTop: 5,
        color: 'red',
        fontSize: 14,
    },
});
