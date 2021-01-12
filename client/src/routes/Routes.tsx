import * as React from "react";
import Main from "containers/Main";
import Products from "containers/Products";
import Support from "containers/Support";
import Notice from "containers/Notice";
import Header from "components/Header";
import Footer from "components/Footer";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

function Routes() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/products" exact component={Products} />
        <Route path="/support" exact component={Support} />
        <Route path="/notice" exact component={Notice} />
        <Redirect path="*" to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default Routes;
