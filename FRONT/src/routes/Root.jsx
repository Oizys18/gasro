import React, { Component } from "react";
import Main from "components/pages/Main";
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
          <Redirect path="*" to="/" />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}
export default Root;
