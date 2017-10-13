import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner, CardSection} from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {
  state = { loggedIn: null }

  componentWillMount(){
    const config = {
    apiKey: "AIzaSyDeLdbxJDhdBTAh1e2y6Ap_06Ht3gp2Jsc",
    authDomain: "authproject-876c6.firebaseapp.com",
    databaseURL: "https://authproject-876c6.firebaseio.com",
    projectId: "authproject-876c6",
    storageBucket: "",
    messagingSenderId: "268444776682"
  };

  firebase.initializeApp(config);

  firebase.auth().onAuthStateChanged((user) =>{
    if(user){
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  });
}

renderContent(){
  switch (this.state.loggedIn){
    case true:
      return (
        <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        </CardSection>  
      );
    case false:
      return <LoginForm/>
    default:
      return <Spinner/>
  }
}

render() {
    return (
      <View>
        <Header headerTitle="Authentication"/>
        {this.renderContent()}
      </View>
    );
  }
}


