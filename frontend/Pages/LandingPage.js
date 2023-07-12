import { StyleSheet, View } from 'react-native';
import { JoinButton, LoginButton } from '../Components/Buttons';
import BottomCard from '../Components/Cards';
import { TitleText, SubTitleText } from '../Components/Text';
export default function LandingPage() {
  return (
    <View style={styles.container}>
        <ShapeImage></ShapeImage>
        <TitleText>We're excited to help you plan so many memories!</TitleText>
        <SubTitleText>For those who are tired of making new random group chats for each event.</SubTitleText>
        <BottomCard>
            <JoinButton title={"Join"}></JoinButton>
            <LoginButton title={"Login"}></LoginButton>
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
