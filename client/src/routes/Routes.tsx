import * as React from "react";
import Main from "containers/Main";
import Support from "containers/Support";
import Privacy from "containers/Privacy";
import Admin from "containers/Admin";
import Notice from "containers/Notice";
import Header from "components/Header";
import Footer from "components/Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

import Test from "containers/Test";

// 라우터
function Routes() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/support" exact component={Support} />
        <Route path="/notice" exact component={Notice} />
        <Route path="/notice/:post_id" exact component={Notice} />
        <Route path="/privacy" exact component={Privacy} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/test" exact component={Test} />
        <Redirect path="*" to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default Routes;
