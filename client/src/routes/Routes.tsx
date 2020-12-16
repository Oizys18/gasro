import * as React from "react";
import styled from "styled-components";
import Main from "containers/Main";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const Routes: React.FC = () => (
  <BrowserRouter>
    <Wrapper>
      <Switch>
        <Route path="/" exact component={Main} />
        <Redirect path="*" to="/" />
      </Switch>
    </Wrapper>
  </BrowserRouter>
);

export default Routes;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;