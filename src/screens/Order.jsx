import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import orders from '../data/orders.json';
import OrderItem from '../components/OrderItem';

const Order = ({ navigation }) => {
  const renderItem = ({ item }) => {
    const totalPrice = item.items.reduce((total, item) => total + item.precio * item.quantity, 0);  
    return (
      <OrderItem
        item={item}
        onPress={() => navigation.navigate('OrderDetail', { orderId: item.id })}
        totalPrice={totalPrice} 
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
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
});

export default Order;
