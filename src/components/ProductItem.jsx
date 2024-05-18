import { StyleSheet, Text, Image,Pressable } from 'react-native';
import React from 'react';
import Card from './Card';
import { useDispatch } from 'react-redux';
import { setNombreZapatillaSeleccionada } from '../Features/Shop/shopSlice';

const ProductItem = ({ zapatilla, navigation }) => {  
  const dispatch = useDispatch()

  const handleNavigation = () => {
    navigation.navigate('ZapatillaDetail',{id:zapatilla.id}) 
    dispatch(setNombreZapatillaSeleccionada(zapatilla.nombre))
  }
  return (
    <Card style={styles.cardStyles}>
      <Pressable onPress={handleNavigation} style={styles.pressable}>
        <Text style={styles.text}>{zapatilla.nombre}</Text>
        <Image
          style={styles.imagenZapatilla}
          source={{ uri: zapatilla.imagen }} 
          resizeMode='cover'
        />
      </Pressable>
    </Card>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  cardStyles: {
    backgroundColor: 'lightblue',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  pressable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    width: '100%',
  },
  text: {
    flex: 1,
    fontSize: 16,
    marginRight: 10,
  },
  imagenZapatilla: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
});
