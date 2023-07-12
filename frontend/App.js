import { StyleSheet } from 'react-native';
import SignUpPage from './Pages/SignUpPage';

export default function App() {
  return (
    <SignUpPage></SignUpPage>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
