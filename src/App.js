import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Header from "./components/header/header.component";
import ShopPage from "./pages/shop/shop.component";
import SignInPage from "./pages/signin/signin.component";
import SignUpPage from "./pages/signup/signup.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

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
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/account/signin"
            render={() => (currentUser ? <Redirect to="/" /> : <SignInPage />)}
          />
          <Route exact path="/account/signup" component={SignUpPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDisPatchToProps = (dispatch) => ({
  // dispatch cho redux biết bất cứ thứ gì, đối tượng gì truyền vào dispatch đều trở thành 1 đối tượng action mà redux sẽ chuyển cho mọi reducer
  // Ban đầu setCurrentUser chỉ là 1 hàm trả về đối tượng chứa type và payload chưa phải là 1 action có thể tác động vào reducer
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  // Bây giờ setCurrentUser trở thành 1 action có thể tác động vào reducer
});

export default connect(mapStateToProps, mapDisPatchToProps)(App);
