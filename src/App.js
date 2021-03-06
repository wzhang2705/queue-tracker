import React, { Component } from 'react';
import Profile from './Profile.js';
import Signin from './Signin.js';
import Store from './Store.js';
import Queue from './Queue.js';

import {
  UserSession,
  AppConfig
} from 'blockstack';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const appConfig = new AppConfig()
const userSession = new UserSession({ appConfig: appConfig })

export default class App extends Component {


  handleSignIn(e) {
    e.preventDefault();
    userSession.redirectToSignIn();
  }

  handleSignOut(e) {
    e.preventDefault();
    userSession.signUserOut(window.location.origin);
  }

  render() {
    return (    
      <BrowserRouter>
      <div className="site-wrapper">
        <div className="site-wrapper-inner">
        <Switch>
             <Route path="/Store" exact component={Store}/>
             <Route path="/Store/Queue" exact component={Queue}/>
           </Switch>
          { !userSession.isUserSignedIn() ?
            <Signin userSession={userSession} handleSignIn={ this.handleSignIn } />
            : <Profile userSession={userSession} handleSignOut={ this.handleSignOut } />
          }
        </div>
      </div>
      </BrowserRouter>
    );
  }

  componentDidMount() {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then((userData) => {
        window.history.replaceState({}, document.title, "/")
        this.setState({ userData: userData})
      });
    }
  }
}
