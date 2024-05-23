import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import SubmitButton from '../components/SubmitButton'
import { useDispatch, useSelector } from 'react-redux'
import { setCameraImage } from '../Features/User/userSlice'
import { useNavigation } from '@react-navigation/native'
import { usePostProfileImageMutation } from '../services/shopService'

const ImageSelector = () => { 
    const [image, setImage] = useState(null) 
    
    const navigation = useNavigation()
    const dispatch = useDispatch();  
    const {localId} = useSelector(state => state.auth.value) 

    const [triggerPostImage , result] = usePostProfileImageMutation() 
  
    
    const verificarPermisos = async () => {
        const {granted} = await ImagePicker.requestCameraPermissionsAsync() 
        return granted 
    }

    const pickImage = async () => { 
        try {
            const cameraOk = await verificarPermisos(); 
        if (cameraOk){
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [1,1],
                base64: true,
                quality: 0.2
            });
            if (!result.canceled) {
                setImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
            }
        }
        } catch (error) {   
            console.log(error);
        }
        
    }

    const confirmImage = () => { 
        try {
        dispatch(setCameraImage(image))
        triggerPostImage({image,localId})
        navigation.goBack();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            {image ? (
                <>
                    <Image source={{ uri: image }} style={styles.image} />
                    <SubmitButton title='Tomar Otra Foto' onPress={pickImage} />
                    <SubmitButton title='Confirmar Foto' onPress={confirmImage} />
                </>
            ) : (
                <>
                    <View style={styles.placeholderImage}>
                        <Text style={styles.placeholderImageText}>No hay foto...</Text>
                    </View>
                    <SubmitButton title='Tomar Foto' onPress={pickImage} />
                </>
            )}
        </View>
    )
}

export default ImageSelector

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white', 
        height: '100%',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 20,
        marginBottom: 20,
    },
    placeholderImage: {
        width: 200,
        height: 200,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
        justifyContent: 'center',   
        alignItems: 'center',
        marginBottom: 20,
    },
    placeholderImageText: {
        color: 'grey',
        fontSize: 16,
    },
});
