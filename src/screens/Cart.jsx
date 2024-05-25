import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import CartItem from '../components/CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { usePostOrderMutation } from '../services/shopService';
import AwesomeAlert from 'react-native-awesome-alerts';
import { clearCart } from '../Features/Cart/cartSlice';

const Cart = () => {
  const { items: CartData, total } = useSelector(state => state.cart.value);
  const { localId } = useSelector(state => state.auth.value);
  const [triggerPostOrder, resuelt] = usePostOrderMutation();
  const [showAlert, setShowAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const dispatch = useDispatch();

  const handleConfirmOrder = () => {
    setShowAlert(true);
  };

  const handleConfirmOrderAlert = () => {
    triggerPostOrder({ total, items: CartData, user: localId });
    dispatch(clearCart());
    setShowAlert(false);
    setShowSuccessAlert(true);
  };

  const handleCancelOrderAlert = () => {
    setShowAlert(false);
  };

  const handleSuccessAlertDismiss = () => {
    setShowSuccessAlert(false);
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
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="Confirmar pedido"
        message="¿Estás seguro de que quieres confirmar esta orden?"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        showCancelButton={true}
        confirmText="Sí"
        cancelText="No"
        confirmButtonColor="green"
        cancelButtonColor="red"
        onConfirmPressed={handleConfirmOrderAlert}
        onCancelPressed={handleCancelOrderAlert}
        contentContainerStyle={styles.alertContainer}
        confirmButtonStyle={styles.confirmButton}
        cancelButtonStyle={styles.cancelButton}
      />
      <AwesomeAlert
        show={showSuccessAlert}
        showProgress={false}
        title="Éxito"
        message="Tu orden ha sido confirmada."
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText="OK"
        confirmButtonColor="green"
        onConfirmPressed={handleSuccessAlertDismiss}
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
  alertContainer: {
    width: '80%',
    alignItems: 'center',
  },
  confirmButton: {
    backgroundColor: 'green', 
    width: '30%', 
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: 'red', 
    width: '30%', 
    alignItems: 'center',
  },
});

export default Cart;
