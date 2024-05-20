import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux';

const Cart = () => {
  const {items: CartData, total} = useSelector(state => state.cart.value)
  return (
    <View style={styles.container}>
      <FlatList
        data={CartData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <CartItem cartItem={item} />
      }}
      /> 
      <Text style={styles.totalPriceText}>Total = ${total.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
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
