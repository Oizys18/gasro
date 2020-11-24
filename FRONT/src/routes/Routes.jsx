import React, { Component } from "react";
import Main from "containers/Main";
import Products from "containers/Products";
import Contact from "containers/Contact";
import Header from "components/navbar/Header";
import Footer from "components/navbar/Footer";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/products" exact component={Products} />
          <Route path="/contact" exact component={Contact} />
          <Redirect path="*" to="/" />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}
export default Root;
