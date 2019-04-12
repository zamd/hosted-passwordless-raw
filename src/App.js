import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PasswordlessAuth from './passwordless/Start'
import OtpValidate from './passwordless/Validate'


import { WebAuth } from 'auth0-js';

class App extends Component {

  constructor(props) {
    super(props);
    const config = window.config || { auth0Domain: "originps.auth0.com", clientID: "s8loMRbnGx8ceJsTmQl1Lj8Pbc993dg1", responseType: 'token id_token' };
    console.log(config);
    this.webAuth = new WebAuth({
      domain: config.auth0Domain,
      clientID: config.clientID,
      responseType: config.responseType,
      redirectUri: config.callbackURL,
      responseType: config.extraParams.response_type

    });
    this.state = {
      email: "",
      otp: "",
      authStarted: false
    }

  }

  startPasswordless = email => {

    this.webAuth.passwordlessStart({
      connection: 'email',
      email: email,
      send: 'code'
    }, (err, res) => {
      if (!err) {
        this.setState({ ...this.state, email: email, authStarted: true });
      }
    });

  }

  completePasswordless = otp => {
    const config = window.config || {internalOptions: {}};
    this.webAuth.passwordlessLogin({
      ...config.internalOptions, 
      email: this.state.email,
      verificationCode: otp,
      connection: 'email'
    }, (err, res) => {
      console.log(res);
      if (!err)
        console.log(err);
    })
  }

  render() {
    return (
      <div className="App">
        {!this.state.authStarted ?
          <PasswordlessAuth startAuth={this.startPasswordless} />
          :
          <OtpValidate validateOtp={this.completePasswordless} />
        }
      </div>
    );
  }
}

export default App;
