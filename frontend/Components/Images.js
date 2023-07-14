import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

export default function ShapeImage() {
  return (
    <View style={styles.container}>
        <ImageBackground style={styles.image} source={require('../assets/color-block.png')} />
        <View style={styles.outline}></View>
    </View>
    
  );
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
        borderRadius: 30,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: -10, height: 10 },
        shadowOpacity: .5,
    },
    outline: {
        width: 300,
        height: 300,
        backgroundColor: 'transparent',
        borderColor: 'black',
        borderWidth: 4,
        borderRadius: 30,
        position: 'absolute',
        top: 0,

    },
    image: { 
        width: 300,
        height: 300,
        borderRadius: 30,
    },
});

