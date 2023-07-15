import { StyleSheet, Text, TextInput, View } from 'react-native';
import { textStyles } from './Text';

export default function TextInputWTitle({ text, value, onChangeText, autoCapitalize='none', secureTextEntry=false }) {
  return (
    <View style={styles.container}>
        <Text style={textStyles.labelTextStyle}>{text}</Text>
        <TextInput
          value={value}
          onChangeText = {onChangeText}
          style={styles.input}
          placeholder={text}
          keyboardType="default"
          autoCapitalize={autoCapitalize}
          secureTextEntry={secureTextEntry}
          selectTextOnFocus={true}
          ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red"
    width: "75%",
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    height: 40,
    // margin: 12,
    borderWidth: 1,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 30,
  },
});
