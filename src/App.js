import { Route, Switch } from "react-router-dom";

import Navigation from "./components/navigation/navigation.component";
import ShopPage from "./pages/shop/shop.component";
import SignInPage from "./pages/signin/signin.component";
import SignUpPage from "./pages/signup/signup.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route exact path="/shop" component={ShopPage} />
      <Route exact path="/account/signin" component={SignInPage} />
      <Route exact path="/account/signup" component={SignUpPage} />
    </div>
  );
}

export default App;
