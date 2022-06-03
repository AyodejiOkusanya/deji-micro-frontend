import { Spinner } from "@chakra-ui/react";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { retry } from "./helpers/retryChunk";

// @ts-ignore
const CounterAppOne = lazy(() => retry(() => import("app1/CounterAppOne")));
// @ts-ignore
const CounterAppTwo = lazy(() => retry(() => import("app2/CounterAppTwo")));

const Home = lazy(() => import("./Components/Home"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Spinner size="xl" />}>
        <Switch>
          <Route path="/about">
            <CounterAppOne />
          </Route>
          <Route path="/users">
            <CounterAppTwo />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
