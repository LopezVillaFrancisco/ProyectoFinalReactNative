import { Image, Pressable, StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React from 'react';
import { useGetZapatillasByIdQuery } from '../services/shopService';
import Counter from '../components/Counter'
const ZapatillaDetail = ({ route}) => { 
  const {id} = route.params  
  const {data:zapatilla,error,isLoading} = useGetZapatillasByIdQuery(id)
  
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
    <View style={styles.container} >
      {zapatilla ? (
        <View style={styles.detailsContainer}>
          <Image
            source={{ uri: zapatilla.imagen }}
            style={styles.imagenZapatilla}
            resizeMode='cover' 
          />
          <View style={styles.textContainer}>
            <Text style={styles.nombre}>{zapatilla.nombre}</Text>
            <Text style={styles.descripcion}>{zapatilla.descripcion}</Text>
            <Text style={styles.precio}>${zapatilla.precio}</Text> 
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Agregar al carrito</Text>
            </Pressable> 
          </View>  
          <Counter/>
        </View>
      ) : null}
    </View>
  );
}

export default ZapatillaDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  detailsContainer: {
    flex: 1,
    alignItems: 'center',
  },
  imagenZapatilla: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  nombre: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10, 
  },
  descripcion: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  precio: {
    fontSize: 20,
    color: 'green',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,   
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
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
