import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import car1 from '../assests/car1.png'
const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={car1} style={styles.logo} />
            <Text style={styles.text}>vidCom▶️</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    logo: {
        width: "100%",
        height: '100%',
        resizeMode: 'contain',
    },
    text: {
        fontSize: 35,
        // marginTop: 30,
        color:'#fff',
        position:'absolute',
    },
});

export default SplashScreen;