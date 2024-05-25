import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';

const LocationSelector = () => { 
    const [location, setLocation] = useState({ latitude: '', longitude: '' });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync(); 
        if (status !== 'granted') {
          setError('Se denegó el permiso para acceder a la ubicación.'); 
          setLoading(false);
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation({ 
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        });
        setLoading(false);
      })();
    }, []);

    return ( 
        <View style={styles.container}>
            <Text style={styles.title}>Dirección</Text> 
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : location.latitude && location.longitude ? (
                <View style={styles.locationContainer}>
                    <Text style={styles.locationText}>Latitud: {location.latitude}</Text>
                    <Text style={styles.locationText}>Longitud: {location.longitude}</Text>
                </View>
            ) : (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{error}</Text>
                </View>
            )}
        </View>
    );
};

export default LocationSelector;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    locationContainer: {
        padding: 20,
        borderRadius: 10,
    },
    locationText: {
        fontSize: 18,
        color: '#333',
    },
    errorContainer: {
        padding: 20,
        borderRadius: 10,
    },
    errorText: {
        fontSize: 18,
        color: 'red',
    },
});
