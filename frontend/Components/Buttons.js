import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

export function JoinButton({title, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </View>
    </TouchableWithoutFeedback>
  );
}

export function LoginButton({title, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.loginButton}>
            <Text style={styles.text}>{title}</Text>
        </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#FFC221",
        borderRadius: 30,
        height: 65,
        marginTop: 16,
    },
    loginButton: {
        backgroundColor: "#20C4BA",
        borderRadius: 30,
        height: 65,
        marginTop: 16,
    },
    text: {
        textAlign: "center",
        lineHeight: 65,
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    }
});
