import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import OrderItem from '../components/OrderItem';
import { useGetOrdersQuery } from '../services/shopService';
import { useSelector } from 'react-redux';

const Order = ({ navigation }) => {
  const { localId } = useSelector(state => state.auth.value);
  const { data: response, isSuccess, isLoading, isError } = useGetOrdersQuery();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (isSuccess && response) { 
      const ordersFromResponse = Object.values(response)
      const ordersFiltered = ordersFromResponse.filter(order => order.user === localId);
      setOrders(ordersFiltered);
    }
  }, [response, isSuccess]);
  const renderItem = ({ item }) => {
    const totalPrice = item.items.reduce((total, item) => total + item.precio * item.quantity, 0);
    return (
      <OrderItem
        item={item}
        totalPrice={totalPrice}
      />
    );
  };

  if (isLoading) {
    return <Text>Cargando...</Text>;
  }

  if (isError) {
    return <Text>Error al cargar las ordenes</Text>;
  }

  return (
    <View style={styles.container}>
      {orders.length > 0 ? (
        <FlatList
          data={orders}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text>No hay órdenes todavía</Text>
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
});

export default Order;
