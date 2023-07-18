import { StyleSheet, View, Text } from 'react-native';
import SignUpPage from './Pages/SignUpPage';
import LandingPage from './Pages/LandingPage';
import React from 'react';
import LoginPage from './Pages/LoginPage';
import AppPage from './Pages/AppPage';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyStack } from './StartApp';
// import HomePage from './Pages/HomePage';
// import SignUpPage from './Pages/SignUpPage';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Hello" component={LandingPage} />
        <Stack.Screen name="Sign Up" component={SignUpPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={AppPage} />
      </Stack.Navigator> */}
      <MyStack></MyStack>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainView: {
    width: "100%",
    height: "100%",
  },
});
