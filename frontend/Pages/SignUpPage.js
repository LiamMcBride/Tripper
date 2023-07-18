import { StyleSheet, View, Text } from 'react-native';
import { textStyles } from '../Components/Text';
import TextInputWTitle from '../Components/Inputs';
import React from 'react';
import { JoinButton } from '../Components/Buttons';
import { containerStyles } from './LandingPage';

export default function SignUpPage({navigation}) {

  return (
    <View style={containerStyles.screenContainer}>
      <Text style={textStyles.titleTextStyle}>Go ahead and fill out the info to sign up!</Text>
      {/* <TextInputWTitle value={fName} onChangeText={changeFName} text={"First"} autoCapitalize='words'></TextInputWTitle>
      <TextInputWTitle value={lName} onChangeText={changeLName} text={"Last"} autoCapitalize='words'></TextInputWTitle>
      <TextInputWTitle value={email} onChangeText={changeEmail} text={"Email"}></TextInputWTitle>
      <TextInputWTitle value={pword} onChangeText={changePWord} text={"Password"} secureTextEntry={true}></TextInputWTitle> */}
      <View style={styles.buttonContainer}>
        <JoinButton title="Join" onPress={() => {
          const data = {
            // "email":email,
            // "firstName":fName,
            // "lastName":lName,
            // "password":pword,
            "phone": "0000000000",
          }
          console.log(data);
          
          fetch('http://127.0.0.1:5000/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          .then(response => response.json())
          .then(retData => {
            console.log(retData);
            navigation.replace("Login");
          })
          .catch(error => {
            console.error(error);
            navigation.replace("Login");
          })


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
