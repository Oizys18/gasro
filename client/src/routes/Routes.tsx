import * as React from "react";
import styled from "styled-components";
import Main from "containers/Main";
import Header from "components/Header";
import Footer from "components/Footer";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const Routes: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={Main} />
      <Redirect path="*" to="/" />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default Routes;
