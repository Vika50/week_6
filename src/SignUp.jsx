import React, { Component } from 'react';
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


 class SingUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		}
	}

signUp() {
	console.log('this.state', this.state);
	const {email, password} = this.state;
	firebaseApp.auth().createUserWithEmailAndPassword(email, password)
	.catch(error => {
		console.log('error', error);
	})
}

	render() {
		return (
			<div>
			            <input type="e-mail" id="auth_login" name="e-mail" placeholder="E-mail" onChange={event => this.setState({email: event.targer.value})} />
                        <input type="password" title="Не менее 6 знаков, в том числе хотя бы одна цифра и буква" id="auth_password" name="passpword" placeholder="Password" onChange={event => this.setState({password: event.targer.value})} />
                        <input type="button" onClick={() => this.signUp()} id="sing-in"  value="Войти" />
                        <input type="button" id="sing-up"  value="Зарегистрироваться" />
			</div>
			)
	}
}