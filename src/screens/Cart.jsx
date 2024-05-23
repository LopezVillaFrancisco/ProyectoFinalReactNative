import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux';
import { usePostOrderMutation } from '../services/shopService';

const Cart = () => {
  const { items: CartData, total } = useSelector(state => state.cart.value);
  const [triggerPostOrder, resuelt] = usePostOrderMutation();

  const handleConfirmOrder = () => {
    triggerPostOrder({ total, items: CartData, user: 'loggedUser' });
  };


  return (
    <View style={styles.container}>
      {CartData.length === 0 ? (
        <Text style={styles.emptyCartText}>No hay elementos en el carrito, agrega uno</Text>
      ) : (
        <>
          <FlatList
            data={CartData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return <CartItem cartItem={item} />;
            }}
          />
          <Text style={styles.totalPriceText}>Total = ${total.toFixed(2)}</Text>
          <Pressable style={styles.checkoutButton} onPress={handleConfirmOrder}>
            <Text style={styles.checkoutButtonText}>Confirmar</Text>
          </Pressable>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
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
  emptyCartText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 20, 
    textAlign: 'center'
  },
});

export default Cart;
