import React from "react";
import Home from "../../pages/Home";
import Wikipedia from "../../pages/Wikipedia";
import { Route, Switch } from "wouter";
import TodoList from "../../pages/Todos";
import Lang from "../../pages/Lang";

const Routes = () => {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/wikipedia">
        <Wikipedia />
      </Route>
      <Route path="/todos">
        <TodoList />
      </Route>
      <Route path="/lang">
        <Lang />
      </Route>
    </Switch>
  );
};

export default Routes;
