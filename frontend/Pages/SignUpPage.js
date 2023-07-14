import { StyleSheet, View, Text } from 'react-native';
import { textStyles } from '../Components/Text';

export default function SignUpPage() {
  return (
    <View style={styles.container}>
      <Text style={textStyles.titleTextStyle}>hi</Text>
        {/* <TitleText>Go ahead and fill out the info to sign up!</TitleText>
        <TextInputWTitle></TextInputWTitle> */}
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
