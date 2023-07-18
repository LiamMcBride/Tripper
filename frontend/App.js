import { StyleSheet, View, Text } from 'react-native';
import SignUpPage from './Pages/SignUpPage';
import LandingPage from './Pages/LandingPage';
import React from 'react';
import LoginPage from './Pages/LoginPage';
import AppPage from './Pages/AppPage';
// import HomePage from './Pages/HomePage';
// import SignUpPage from './Pages/SignUpPage';

export default function App() {
  const [currentPage, setCurrentPage] = React.useState("landing");
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
  }
  
  
  let pageToRender = <Text>No Page</Text>;


  if (currentPage === "signup") {
    pageToRender = <SignUpPage setPage={handlePageChange}></SignUpPage>;
  } else if (currentPage === "login") {
    pageToRender = <LoginPage setPage={handlePageChange}></LoginPage>;
  } else if (currentPage === "landing") {
    pageToRender = <LandingPage setPage={handlePageChange}></LandingPage>;
  } else if (currentPage === "logged_in") {
    pageToRender = <AppPage setPage={handlePageChange}></AppPage>;
  }
  else{
    pageToRender = <Text>No Page</Text>;
  }



  //<SignUpPage setPage={{setCurrentPage}}></SignUpPage>
  //<Login setPage={setCurrentPage}></Login>
  //<LandingPage setPage={setCurrentPage}></LandingPage>
  return (
    <View style={styles.mainView}>
      {pageToRender}
    </View>
  );
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
