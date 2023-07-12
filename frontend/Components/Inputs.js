import { StyleSheet, TextInput, View } from 'react-native';
import LabelText from './Text';

export default function TextInputWTitle({ text }) {
  return (
    <View style={styles.container}>
        <LabelText>Email</LabelText>
        <TextInput></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
