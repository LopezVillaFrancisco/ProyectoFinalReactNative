import { View, Text, Image, Pressable, StyleSheet, Alert } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons'; 
import { removeCartItem } from '../Features/Cart/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = (cartItem) => {   
  const item = cartItem.cartItem;
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    Alert.alert(
      "Confirmar eliminación",
      "¿Estás seguro de que quieres eliminar este producto del carrito?",
      [
        {
          text: "Sí",
          onPress: () => dispatch(removeCartItem({ id: item.id })),
          style: "destructive"
        },
        {
          text: "No",
          style: "cancel"
        }
      ]
    );
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: item.imagen }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.nombre}</Text>
        <Text style={styles.description}>{item.descripcion}</Text>
        <Text style={styles.price}>${item.precio}</Text>
        <Text style={styles.quantity}>Cantidad: {item.quantity}</Text>
        <Pressable style={styles.removeButton} onPress={handleRemoveItem}>
          <Ionicons 
            name="trash-outline" 
            size={24} 
            color="red" 
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    padding: 8,
    marginBottom: 10,
    borderRadius: 10,
    position: 'relative',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: 'grey',
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    color: 'green',
  },
  quantity: {
    fontSize: 16,
    marginBottom: 5,
  },
  totalPrice: {
    fontSize: 16,
    marginBottom: 5,
  },
  removeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
});

export default CartItem;
