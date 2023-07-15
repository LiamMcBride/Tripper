import { StyleSheet, View, Text } from 'react-native';
import { textStyles } from '../Components/Text';
import TextInputWTitle from '../Components/Inputs';
import React from 'react';
import { JoinButton } from '../Components/Buttons';

export default function LoginPage({ setPage }) {
  const [email, changeEmail] = React.useState("");
  const [fName, changeFName] = React.useState("");
  const [lName, changeLName] = React.useState("");
  const [pword, changePWord] = React.useState("");

  return (
    <View style={styles.container}>
      <Text style={textStyles.titleTextStyle}>Go ahead and fill out the info to sign up!</Text>
      <TextInputWTitle value={fName} onChangeText={changeFName} text={"First"} autoCapitalize='words'></TextInputWTitle>
      <TextInputWTitle value={lName} onChangeText={changeLName} text={"Last"} autoCapitalize='words'></TextInputWTitle>
      <TextInputWTitle value={email} onChangeText={changeEmail} text={"Email"}></TextInputWTitle>
      <TextInputWTitle value={pword} onChangeText={changePWord} text={"Password"} secureTextEntry={true}></TextInputWTitle>
      <View style={styles.buttonContainer}>
        <JoinButton title="Join" onPress={() => {
          const data = {
            "email":email,
            "firstName":fName,
            "lastName":lName,
            "password":pword,
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
          })
          .catch(error => {
            console.error(error);
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
});
