import * as React from "react";
import Main from "containers/Main";
import Products from "containers/Products";
import Product from "containers/Product";
import Support from "containers/Support";
import Company from "containers/Company";
import Notice from "containers/Notice";
import Header from "components/Header";
import Footer from "components/Footer";
import Landing from "containers/Landing";
import { Switch, Route, Redirect } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
function Routes() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/main" exact component={Main} />
        <Route path="/product" exact component={Product} />
        <Route path="/company" exact component={Company} />
        <Route path="/support" exact component={Support} />
        <Route path="/notice" exact component={Notice} />
        <Route path="/products" exact component={Products} />
        <Redirect path="*" to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default Routes;
