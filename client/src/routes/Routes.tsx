import * as React from "react";
import Main from "containers/Main";
import Products from "containers/Products";
import Product from "containers/Product";
import Support from "containers/Support";
import Company from "containers/Company";
import Notice from "containers/Notice";
import Header from "components/Header";
import Footer from "components/Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
function Routes() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/products" exact component={Products} />
        <Route path="/product" exact component={Product} />
        <Route path="/company" exact component={Company} />
        <Route path="/support" exact component={Support} />
        <Route path="/notice" exact component={Notice} />
        <Redirect path="*" to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default Routes;
