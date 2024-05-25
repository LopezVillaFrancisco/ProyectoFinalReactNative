import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SubmitButton from '../components/SubmitButton';
import { useDispatch, useSelector } from 'react-redux'; 
import { useGetProfileImageQuery } from '../services/shopService';
import { clearUser } from '../Features/User/userSlice';

const MyProfile = () => {
    const navigation = useNavigation(); 
    const dispatch = useDispatch();
    const { image, localId } = useSelector(state => state.auth.value);
    
    const defaultImageRoute = require('../../assets/defaultProfile.jpg'); 

    const { data: imageFromBase } = useGetProfileImageQuery(localId);
    
    const handleImageSelector = () => {
        navigation.navigate('Image selector');
    };
    
    const handleSignOut = async () => {
        dispatch(clearUser());
    }; 


    return (
        <View style={styles.container}>
            {imageFromBase || image ? (
                <Image source={{ uri: imageFromBase?.image || image }} style={styles.profileImage} resizeMode='cover' />
            ) : (
                <Image source={defaultImageRoute} style={styles.profileImage} resizeMode='cover' />
            )}
            <View style={styles.buttonContainer}>
                <SubmitButton style={styles.button} onPress={handleImageSelector} title={'Cambiar Foto de Perfil'} />
                <SubmitButton style={styles.button} onPress={handleSignOut} title={'Cerrar sesion'} />
            </View>
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
        borderRadius: 50,
        marginBottom: 20,
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center', 
    },
});
