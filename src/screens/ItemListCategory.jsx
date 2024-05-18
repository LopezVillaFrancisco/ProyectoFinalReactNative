import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react' 
import zapatillas from '../data/zapatillas.json'
import ProductItem from '../components/ProductItem'
import SearchBar from '../components/SearchBar'

const ItemListCategory = ({ navigation, route  }) => {

  const {marca} = route.params

  const [keyWord, setKeyWord] = useState('')
  const [zapatillasFiltrar, setZapatillasFiltrar] = useState(zapatillas) 
  useEffect(() => {
    const zapatillasFiltradas = zapatillas.filter(zapatilla => 
      (zapatilla.nombre.toLowerCase().includes(keyWord.toLowerCase()) || zapatilla.marca.toLowerCase().includes(keyWord.toLowerCase())) &&
      (marca ? zapatilla.marca.toLowerCase() === marca.toLowerCase() : true)
    )
    setZapatillasFiltrar(zapatillasFiltradas)
  }, [keyWord, marca])

  return (
    <View style={styles.container}>
      <SearchBar onSearch={setKeyWord}/>
      <FlatList
        data={zapatillasFiltrar}
        renderItem={({ item }) => <ProductItem zapatilla={item} navigation={navigation}/>}
        keyExtractor={(zapatilla) => zapatilla.id.toString()}
      />
    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: "100%",
    height: "100%",
    padding: 20,
    backgroundColor: 'black',
  },
})
