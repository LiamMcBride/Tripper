import { StyleSheet, View, Text } from 'react-native';
import { textStyles } from '../Components/Text';
import TextInputWTitle from '../Components/Inputs';
import React from 'react';
import { JoinButton } from '../Components/Buttons';
// import * as SecureStore from 'expo-secure-store';



export default function AppPage({ setPage }) {

  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    height: '100%',
  },
  buttonContainer: {
    width: "75%",
    position: "absolute",
    bottom: "10%",
  },
});
