import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SubmitButton from '../components/SubmitButton';
import { useSelector } from 'react-redux'; 
import { useGetProfileImageQuery } from '../services/shopService';

const MyProfile = () => {
    const navigation = useNavigation(); 
    const {image,localId} = useSelector(state => state.auth.value)
    
    const defaultImageRoute = require('../../assets/defaultProfile.jpg'); 

    const  {data:imageFromBase} = useGetProfileImageQuery(localId)
    

    const handleImageSelector = () => {
    navigation.navigate('Image selector');
  };

  return (
    <View style={styles.container}>
        {imageFromBase || image ? (
            <Image source={{uri:imageFromBase?.image||image}} style={styles.profileImage} resizeMode='cover' /> 

        )
        :(
            <Image source={defaultImageRoute} style={styles.profileImage} resizeMode='cover' /> 
        )}
      <SubmitButton onPress={handleImageSelector} title={'Cambiar Foto de Perfil'}/>
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white', 
    width: '100%',
    height: '100%',
  }, 
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 75,
    marginBottom: 20,
  },
});
