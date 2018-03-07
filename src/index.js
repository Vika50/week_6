import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Router, Route, browserHistory} from 'react-router'
import registerServiceWorker from './registerServiceWorker';

import * as firebase from 'firebase';

  const config = {
    apiKey: "AIzaSyAk0e-uZZaq3wL0Nmmm3bwtO_vms7OQrzQ",
    authDomain: "dream-1cd29.firebaseapp.com",
    databaseURL: "https://dream-1cd29.firebaseio.com",
    projectId: "dream-1cd29",
    storageBucket: "dream-1cd29.appspot.com",
    messagingSenderId: "1076155968459"
  };
  firebase.initializeApp(config);
 
import SignUp from './SignUp';

  firebaseApp.auth().onAuthStateChanged(user => {
  	if (user){
  		console.log('user has singned in or up', user);
  	} else {
  		console.log('user has signed out or')
  	}
  })

ReactDOM.render(
	<Router path="" history={browserHistory}>
	<Route path="/app" componet={App} >
	<Route path="/signup" componet={SignUp} >
	</Router>, document.getElementById('root')
)

