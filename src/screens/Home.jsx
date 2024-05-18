import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import marcasZapas from '../data/marcasZapas.json'; 
import MarcaZapatillas from '../components/MarcaZapatillas'; 

const Home = ({ navigation }) => { 

  return (
    <View style={styles.container}>
      <FlatList
        data={marcasZapas}
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
});

export default Home;
