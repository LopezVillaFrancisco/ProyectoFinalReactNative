import { View, Text, Image, StyleSheet, FlatList, Pressable } from 'react-native';
import React, { useState } from 'react';
import cartItems from '../data/cartItems.json';
import { Ionicons } from '@expo/vector-icons';

const Cart = () => {
  const [cartData, setCartData] = useState(cartItems);

  const handleRemoveItem = (id) => {
    setCartData(cartData.filter(item => item.id !== id));
  };

  const renderCartItem = ({ item }) => {
    const totalPrice = item.quantity * item.precio; 
    return (
      <View style={styles.card}>
        <Image source={{ uri: item.imagen }} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.name}>{item.nombre}</Text>
          <Text style={styles.description}>{item.descripcion}</Text>
          <Text style={styles.price}>${item.precio}</Text>
          <Text style={styles.quantity}>Cantidad: {item.quantity}</Text> 
          <Text style={styles.totalPrice}>Precio Total: ${totalPrice}</Text>
          <Pressable style={styles.removeButton} onPress={() => handleRemoveItem(item.id)}>
            <Ionicons name="trash-outline" size={24} color="red" />
          </Pressable>
        </View>
      </View>
    );
  };

  const totalPrice = cartData.reduce((acumulador, item) => acumulador + item.quantity * item.precio, 0); 

  return (
    <View style={styles.container}>
      <FlatList
        data={cartData}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id}
        ListFooterComponent={
          <View style={styles.footer}>
            <Text style={styles.totalPriceText}>Precio Total de la Compra: ${totalPrice.toFixed(2)}</Text>
            <Pressable style={styles.checkoutButton}>
              <Text style={styles.checkoutButtonText}>Finalizar Compra</Text>
            </Pressable>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
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
  footer: {
    marginTop: 20,
  },
  totalPriceText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: 'lightblue',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Cart;
