import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import BadgeNew from "../pages/badgeNew";
import Layout from "./layout";
import Home from "../pages/home";
import Badges from "../pages/badges";
import NotFound from "../pages/notFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
