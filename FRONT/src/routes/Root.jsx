import React, { Component } from "react";
import Main from "components/pages/Main";
import Products from "components/pages/Products";
import Contact from "components/pages/Contact";
import Header from "components/common/navbar/Header";
import Footer from "components/common/navbar/Footer";
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
