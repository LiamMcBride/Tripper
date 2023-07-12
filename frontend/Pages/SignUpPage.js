import { StyleSheet, View } from 'react-native';
import TextInputWTitle from '../Components/Inputs';
import TitleText from '../Components/Text';

export default function SignUpPage() {
  return (
    <View style={styles.container}>
        <TitleText>Go ahead and fill out the info to sign up!</TitleText>
        <TextInputWTitle></TextInputWTitle>
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
});
