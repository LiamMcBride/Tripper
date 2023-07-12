import { StyleSheet, Text } from 'react-native';

export function TitleText({ children }) {
  return (
    <Text style={styles.titleTextStyle}>{children}</Text>
  );
}

export function LabelText({ children }) {
  return (
    <Text style={styles.labelTextStyle}>{children}</Text>
  );
}

export function SubTitleText({ children }) {
  return (
    <Text style={styles.subTitleTextStyle}>{children}</Text>
  );
}

const styles = StyleSheet.create({
    subTitleTextStyle: {
        fontSize: 18,
        fontWeight: 'regular',
        textAlign: 'center',
        color: 'grey',
    },
    titleTextStyle: {
        marginTop: 24,
        marginBottom: 8,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    labelTextStyle: {
        fontSize: 2,
        fontWeight: 'bold',
    },
    
});
