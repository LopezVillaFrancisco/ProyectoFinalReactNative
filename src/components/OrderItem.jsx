import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Octicons } from '@expo/vector-icons';

const OrderItem = ({ item, onPress, totalPrice }) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.detalle}>
        <Text style={styles.id}>Orden ID: {item.id}</Text>
        <Text style={styles.totalPrice}>Precio Total: ${totalPrice}</Text> 
      </View>
      <Pressable style={styles.iconButton} onPress={onPress}>
        <Octicons name="info" size={24} color="black" />
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    padding: 14,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  detalle: {
    flex: 1,
  },
  fecha: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  id: {
    fontSize: 16,
    color: 'grey',
  },
  totalPrice: {
    fontSize: 16,
    color: 'green',
  },
  iconButton: {
    padding: 10,
  },
});

export default OrderItem;
