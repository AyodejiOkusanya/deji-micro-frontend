import { Spinner } from "@chakra-ui/react";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { retry } from "./helpers/retryChunk";

// @ts-ignore
const TabsComponent = lazy(() => retry(() => import("app1/TabsComponent")));
// @ts-ignore
const CounterAppTwo = lazy(() => retry(() => import("app2/CounterAppTwo")));

const Home = lazy(() => import("./Components/Home"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Spinner size="xl" />}>
        <Switch>
          <Route path="/tabs">
            <TabsComponent />
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
