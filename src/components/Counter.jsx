import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from '../Features/Counter/counterSlice';

const Counter = () => { 
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    const [inputToAdd, setInputToAdd] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.counterContainer}>
                <Pressable 
                    style={styles.button}
                    onPress={() =>dispatch(decrement())}
                >
                    <Text style={styles.buttonText}>-</Text>
                </Pressable>
                <Text style={styles.countText}>{count}</Text> 
                <Pressable 
                    style={styles.button}
                    onPress={() =>dispatch(increment())}
                >
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Cantidad a aumentar'
                    value={inputToAdd}
                    onChangeText={setInputToAdd}
                    keyboardType="numeric"
                /> 
                <Pressable
                    style={styles.button}
                    onPress={() => dispatch(incrementByAmount(Number(inputToAdd)))}
                >
                    <Text style={styles.buttonText}>Add</Text>
                </Pressable>
                <Pressable
                    style={styles.button}
                    onPress={() => dispatch(reset())}
                >
                    <Text style={styles.buttonText}>Reset</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default Counter;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
    },
    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 10, 
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold', 
        textAlign: 'center',
    },
    countText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    inputContainer: {
        width: '100%',
        paddingHorizontal: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
    },
});
