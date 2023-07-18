import { StyleSheet, View, Text } from 'react-native';
import { JoinButton, LoginButton } from '../Components/Buttons';
import BottomCard from '../Components/Cards';
import { textStyles } from '../Components/Text';
import ShapeImage from '../Components/Images';

export default function LandingPage({ navigation }) {
  return (
    <View style={containerStyles.screenContainer}>
        <ShapeImage></ShapeImage>
        <Text style={textStyles.titleTextStyle}>We're excited to help you plan so many memories!</Text>
        <Text style={textStyles.subTitleTextStyle}>For those who are tired of making new random group chats for each event.</Text>
        <BottomCard>
            <JoinButton title={"Join"} onPress={() => navigation.navigate("Sign Up", {name: "Sign Up"})}></JoinButton>
            <LoginButton title={"Login"} onPress={() => navigation.navigate("Login", {name: "Login"})}></LoginButton>
        </BottomCard>
    </View>
  );
}

export const containerStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingTop: 25,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    height: '100%',
  },
});
