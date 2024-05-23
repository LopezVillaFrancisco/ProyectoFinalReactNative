import { FlatList, StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import ProductItem from '../components/ProductItem';
import SearchBar from '../components/SearchBar';
import { useGetZapatillasByMarcaQuery } from '../services/shopService';

const ItemListCategory = ({ navigation, route }) => {
  const { marca } = route.params;
  const { data: zapatillas, error, isLoading } = useGetZapatillasByMarcaQuery(marca);
  const [keyWord, setKeyWord] = useState('');
  const [zapatillasFiltrar, setZapatillasFiltrar] = useState([]);

  useEffect(() => {
    if (zapatillas) {
      const zapatillasFiltradas = zapatillas.filter(zapatilla =>
        (zapatilla.nombre.toLowerCase().includes(keyWord.toLowerCase()) ||
          zapatilla.marca.toLowerCase().includes(keyWord.toLowerCase())) &&
        (marca ? zapatilla.marca.toLowerCase() === marca.toLowerCase() : true)
      );
      setZapatillasFiltrar(zapatillasFiltradas);
    }
  }, [zapatillas, keyWord, marca]);

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
      <SearchBar onSearch={setKeyWord} />
      <FlatList
        data={zapatillasFiltrar}
        renderItem={({ item }) => <ProductItem zapatilla={item} navigation={navigation} />}
        keyExtractor={(zapatilla) => zapatilla.id.toString()}
      />
    </View>
  );
};

export default ItemListCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
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
