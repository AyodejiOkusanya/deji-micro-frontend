import { Spinner } from "@chakra-ui/react";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { retry } from "./helpers/retryChunk";

// @ts-ignore
const TabsComponent = lazy(() => retry(() => import("app1/TabsComponent")));
// @ts-ignore
const Accordian = lazy(() => retry(() => import("app2/Accordian")));

const ImageGallery = lazy(() =>
  // @ts-ignore
  retry(() => import("gallery/ImageGallery"))
);

const Home = lazy(() => import("./Components/Home"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Spinner size="xl" />}>
        <Switch>
          <Route path="/tabs">
            <TabsComponent />
          </Route>
          <Route path="/accordian">
            <Accordian />
          </Route>
          <Route path="/gallery">
            <ImageGallery />
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
