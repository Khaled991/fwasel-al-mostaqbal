import { Component, lazy, Suspense } from "solid-js";
import {
  Router,
  pathIntegration,
  MatchRoute,
  Link,
} from "@rturnq/solid-router";
import { Switch } from "solid-js";
const HomePage = lazy(() => import("./page/HomePage/HomePage"));
const NavBar = lazy(() => import("./components/NavBar/NavBar"));
const Call = lazy(() => import("./page/Call/Call"));
import "./App.scss";

const App: Component = () => {
  return (
    <Router integration={pathIntegration()}>
      <NavBar />
      <div className="background">
        <Switch fallback={<h1>404</h1>}>
          <Suspense fallback={<div>loading...</div>}>
            <MatchRoute end path="/">
              <HomePage />
            </MatchRoute>
            <MatchRoute end path="/call">
              <Call />
            </MatchRoute>
          </Suspense>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
