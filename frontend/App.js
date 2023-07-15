import { StyleSheet, View, Text } from 'react-native';
import SignUpPage from './Pages/SignUpPage';
import LandingPage from './Pages/LandingPage';
import React from 'react';
import LoginPage from './Pages/LoginPage';
// import SignUpPage from './Pages/SignUpPage';

export default function App() {
  const [currentPage, setCurrentPage] = React.useState("signup");
  let button = <SignUpPage setPage={setCurrentPage}></SignUpPage>;
  if(currentPage == 'signup'){
    return (
      button = <SignUpPage setPage={{setCurrentPage}}></SignUpPage>
    )
  }
  else if(currentPage == 'landingpage'){
    return (
      button = <LandingPage setPage={setCurrentPage}></LandingPage>
    );
  }
  else if(currentPage == 'loginpage'){
    return (
      button = <Login setPage={setCurrentPage}></Login>
    );
  }
  return (
    <View style={styles.mainView}>
      {button}
    </View>
  );

  
  
  return <Text>No Page</Text>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainView: {
    width: "100%",
    height: "100%",
  },
});
