import { StyleSheet, View, Text } from 'react-native';
import { JoinButton, LoginButton } from '../Components/Buttons';
import BottomCard from '../Components/Cards';
import { textStyles } from '../Components/Text';
import ShapeImage from '../Components/Images';

export default function LandingPage({ setPage }) {
  return (
    <View style={styles.container}>
        <ShapeImage></ShapeImage>
        <Text style={textStyles.titleTextStyle}>We're excited to help you plan so many memories!</Text>
        <Text style={textStyles.subTitleTextStyle}>For those who are tired of making new random group chats for each event.</Text>
        <BottomCard>
            <JoinButton title={"Join"} onPress={setPage("signup")}></JoinButton>
            <LoginButton title={"Login"} onPress={setPage("login")}></LoginButton>
        </BottomCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    height: '100%',
  },
});
