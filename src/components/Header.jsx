import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { resetMarcaSeleccionada, resetNombreZaptilla } from '../Features/Shop/shopSlice'; 

const Header = ({ title, navigation }) => {
  const marcaSeleccionada = useSelector(state => state.shop.value.marcaSeleccionada);  
  const nombreZapatilla = useSelector(state => state.shop.value.nombreZapatillaSeleccionada);    
  const dispatch = useDispatch();

  return (
    <View style={styles.titleContainer}>
      {marcaSeleccionada && (
        <Pressable
          style={styles.backButton}
          onPress={() => {   
            if(nombreZapatilla && marcaSeleccionada){
              dispatch(resetNombreZaptilla());  
            } 
            else{
              dispatch(resetMarcaSeleccionada());
            }
            navigation.goBack();
          }}
        >
          <Ionicons name="chevron-back-outline" size={24} color="black" />
        </Pressable>
      )}
      <Text style={styles.name}>
        {nombreZapatilla ? nombreZapatilla : (marcaSeleccionada ? marcaSeleccionada : title)}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  titleContainer: {
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    paddingVertical: 10,
  },
  backButton: {
    position: 'absolute',
    left: 10,
    justifyContent: 'center',
  },
});
