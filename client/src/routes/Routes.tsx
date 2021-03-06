import * as React from "react";
import Main from "containers/Main";
import Support from "containers/Support";
import Privacy from "containers/Privacy";
import Notice from "containers/Notice";
import Header from "components/Header";
import Footer from "components/Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

// import Products from "containers/Products";
// import Product from "containers/Product";
// import Company from "containers/Company";

function Routes() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/support" exact component={Support} />
        <Route path="/notice" exact component={Notice} />
        <Route path="/privacy" exact component={Privacy} />

        {/* <Route path="/products" exact component={Products} />
        <Route path="/product" exact component={Product} />
        <Route path="/company" exact component={Company} /> */}
        <Redirect path="*" to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default Routes;
