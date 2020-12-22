import * as React from "react";
import Main from "containers/Main";
import Products from "containers/Products";
import Header from "components/Header";
import Footer from "components/Footer";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const Routes: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/products" exact component={Products} />
      <Redirect path="*" to="/" />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default Routes;
