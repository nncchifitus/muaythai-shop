import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Navigation from "./components/navigation/navigation.component";
import ShopPage from "./pages/shop/shop.component";
import SignInPage from "./pages/signin/signin.component";
import SignUpPage from "./pages/signup/signup.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

import "./App.css";

class App extends React.Component {
  unsubcribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubcribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);

      // this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/shop" component={ShopPage} />
          <Route
            exact
            path="/account/signin"
            render={() => (currentUser ? <Redirect to="/" /> : <SignInPage />)}
          />
          <Route exact path="/account/signup" component={SignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDisPatchToProps = (dispatch) => ({
  // dispatch cho redux biết bất cứ thứ gì, đối tượng gì truyền vào dispatch đều trở thành 1 đối tượng action mà redux sẽ chuyển cho mọi reducer
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  // Ban đầu setCurrentUser chỉ là 1 đối tượng chứa những gì cần làm chưa phải là 1 action
  // Bây giờ setCurrentUser trở thành 1 action có thể tác động vào reducer
});

export default connect(mapStateToProps, mapDisPatchToProps)(App);
