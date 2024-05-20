import React from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Text } from 'react-native';
import MarcaZapatillas from '../components/MarcaZapatillas'; 
import { useGetMarcasQuery } from '../services/shopService'; 

const Home = ({ navigation }) => {  
  const { data: marcas, error, isLoading } = useGetMarcasQuery();

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="blue" />
        <Text>Cargando...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={marcas}
        renderItem={({ item }) => <MarcaZapatillas navigation={navigation} marca={item} />} 
        keyExtractor={(item, index) => index.toString()} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    width: "100%",
    height: "100%",
    padding: 20, 
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
