import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import orders from '../data/orders.json';

const OrderDetail = ({ route }) => {
  const { orderId } = route.params;
  const order = orders.find(o => o.id === orderId);

  const calcularPrecioTotal = () => {
    return order.items.reduce((total, item) => total + item.precio * item.quantity, 0).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recibo de Compra</Text>
      <View style={styles.itemList}>
        {order.items.map((item) => (
          <View key={item.id} style={styles.item}>
            <Text>{item.nombre}</Text>
            <Text>Cantidad: {item.quantity}</Text>
            <Text>Precio unitario: ${item.precio}</Text>
            <Text>Total: ${(item.precio * item.quantity).toFixed(2)}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.total}>Total: ${calcularPrecioTotal()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemList: {
    marginBottom: 20,
  },
  item: {
    marginBottom: 10,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});

export default OrderDetail;
