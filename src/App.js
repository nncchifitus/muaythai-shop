import React from "react";
import { Route } from "react-router-dom";

import Navigation from "./components/navigation/navigation.component";
import ShopPage from "./pages/shop/shop.component";
import SignInPage from "./pages/signin/signin.component";
import SignUpPage from "./pages/signup/signup.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

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
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Navigation currentUser={this.state.currentUser} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/account/signin" component={SignInPage} />
        <Route exact path="/account/signup" component={SignUpPage} />
      </div>
    );
  }
}

export default App;
