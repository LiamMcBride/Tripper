import { StyleSheet, View, Text } from 'react-native';
import { textStyles } from '../Components/Text';
import TextInputWTitle from '../Components/Inputs';
import React from 'react';
import { JoinButton } from '../Components/Buttons';
import { containerStyles } from './LandingPage';
// import * as SecureStore from 'expo-secure-store';



export default function LoginPage() {

  return (
    <View style={containerStyles.screenContainer}>
      <Text style={textStyles.titleTextStyle}>Give your email and password to login.</Text>
      {/* <TextInputWTitle value={email} onChangeText={changeEmail} text={"Email"}></TextInputWTitle>
      <TextInputWTitle value={pword} onChangeText={changePWord} text={"Password"} secureTextEntry={true}></TextInputWTitle> */}
      <View style={styles.buttonContainer}>
        <JoinButton title="Login" onPress={() => {
          // const token = SecureStore.getItemAsync('secure_token');
          const data = {
            // "email":email,
            // "password":pword,
            "token": "token",
          }
          console.log(data);
          
          fetch('http://127.0.0.1:5000/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          .then(response => response.json())
          .then(retData => {
            console.log(retData);
            // navigation.navigate("AppPage", {name: "Home"});
            // SecureStore.setItemAsync('secure_token',retData["token"]);
          })
          .catch(error => {
            console.error(error);
          })
          /*
          import * as SecureStore from 'expo-secure-store';

          await SecureStore.setItemAsync('secure_token','sahdkfjaskdflas$%^&');
          const token = await SecureStore.getItemAsync('secure_token');
          console.log(token); // output: sahdkfjaskdflas$%^&
          */
        }}></JoinButton>
      </View>
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
  backButton: {
    position: "absolute",
    top: 50,
    left: 25,
    color: "red"
  },
});
