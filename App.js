import React from 'react';
import { StyleSheet, Platform, StatusBar, SafeAreaView, View } from 'react-native';
import TopBar from './src/components/TopBar';
import Navigatior from './src/Navigation/navigatior'; 
import { Provider } from 'react-redux';
import store from './src/Store'; 
import { init } from './src/db';

(async () => {
  try {
    const response = await init()  
    console.log('response',response)
    console.log('DB corriendo')
    
  } catch (err ) {
    console.log('error al correr la DB') 
    console.log(err.message)
  }
    
})()


const App = () => {  
  
  return (
    <SafeAreaView style={styles.container}> 
      <Provider store={store}> 
        <TopBar/>
        <Navigatior/>
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  content: {
    flex: 1,
  },
});

export default App;
