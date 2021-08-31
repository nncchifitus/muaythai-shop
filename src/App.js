import React from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "./components/navigation/navigation.component";
import ShopPage from "./pages/shop/shop.component";
import SignInPage from "./pages/signin/signin.component";
import SignUpPage from "./pages/signup/signup.component";
import { auth } from "./firebase/firebase.utils";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubcribeFromAuth = null;

  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Navigation currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/account/signin" component={SignInPage} />
          <Route exact path="/account/signup" component={SignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
