import { StyleSheet, View, Text } from 'react-native';
import SignUpPage from './Pages/SignUpPage';
import LandingPage from './Pages/LandingPage';
// import SignUpPage from './Pages/SignUpPage';

export default function App() {
  return (
    <SignUpPage></SignUpPage>
    // <LandingPage></LandingPage>
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
