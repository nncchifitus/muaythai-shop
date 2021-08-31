import { Route, Switch } from "react-router-dom";

import Navigation from "./components/navigation/navigation.component";
import ShopPage from "./pages/shop/shop.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route exact path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
