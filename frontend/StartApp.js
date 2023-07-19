import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';
import LandingPage from './Pages/LandingPage';
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';
import AppPage from './Pages/AppPage';

const Stack = createNativeStackNavigator();

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Hello, this is Home</Text>
      <Button
        title="Go to Landing Page"
        onPress={() => 
          navigation.navigate('Landing Page', {name: 'Landing Page'})
        }
      />
      <Button
        title="Go to Footer"
        onPress={() => 
          navigation.navigate('Footer', {name: 'Footer'})
        }
      />
    </View>
  )
}

const Footer = () => {
  return (
    <View>
      <Text>Hello, this is Footer</Text>
    </View>
  )
}

export const MyStack = () => {
  return (
    // <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing Page" component={LandingPage} />
        <Stack.Screen name="Sign Up" component={SignUpPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={AppPage} />
        {/* <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Footer" component={Footer} /> */}
      </Stack.Navigator>
    // </NavigationContainer>
  );
}