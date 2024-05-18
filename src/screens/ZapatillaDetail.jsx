import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import zapatillas from '../data/zapatillas.json'; 

const ZapatillaDetail = ({ route}) => { 
  const {id} = route.params  
  const [zapatilla, setZapatilla] = useState(null);

  useEffect(() => {
    const zapatillaSeleccionada = zapatillas.find((zapatilla) => zapatilla.id == id); 
    setZapatilla(zapatillaSeleccionada); 
  }, [id]);
  
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
});
