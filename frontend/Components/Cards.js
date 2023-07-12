import { StyleSheet, View } from 'react-native';

export default function BottomCard({ children }) {
  return (
    <View style={styles.container}>
        {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderColor: 'black',
    borderWidth: 4,
    width: 350,
    height: 250,
    display: 'block',
    padding: 16,
  },
});
