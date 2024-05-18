import React from 'react';
import { Pressable, Text } from 'react-native';
import Card from './Card';
import { useDispatch} from 'react-redux';
import { setMarcaSeleccionada } from '../Features/Shop/shopSlice';

const MarcaZapatillas = ({ marca,navigation}) => { 
  const dispatch = useDispatch() 
  
  const handleNavigation = ()  => {
    dispatch(setMarcaSeleccionada(marca))

    navigation.navigate('ItemListCategory', {marca}) 

  }
  return (
    <Pressable  onPress={handleNavigation}>
      <Card style={{backgroundColor:'lightblue'}}>
        <Text>{marca}</Text>
      </Card>
    </Pressable>
  );
};

export default MarcaZapatillas;
