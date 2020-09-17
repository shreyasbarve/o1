import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createBrowserHistory } from "history";
import * as serviceWorker from "./serviceWorker";
import { Route, Router, Redirect, Switch } from "react-router-dom";

import Blog from "./Views/Blogs/Blog";
import ViewSingleBlog from "./Views/Blogs/ViewSingleBlog";
import BlogAdmin from "./Views/BlogAdmin/BlogAdmin";
import ViewSingleBlogAdmin from "./Views/BlogAdmin/ViewSingleBlogAdmin";

import Placement from "./Views/Placements/Placement";
import ViewSinglePlacement from "./Views/Placements/ViewSinglePlacement";
import PlacementAdmin from "./Views/PlacementsAdmin/PlacementAdmin";
import ViewSinglePlacementAdmin from "./Views/PlacementsAdmin/ViewSinglePlacementAdmin";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/" component={App} />

      {/* Blogs */}
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/singleblog/:id" component={ViewSingleBlog} />

      <Route exact path="/blogAdmin" component={BlogAdmin} />
      <Route
        exact
        path="/singleblogAdmin/:id"
        component={ViewSingleBlogAdmin}
      />

      {/* Placements */}
      <Route exact path="/placement" component={Placement} />
      <Route
        exact
        path="/singleplacement/:id"
        component={ViewSinglePlacement}
      />

      <Route exact path="/placementAdmin" component={PlacementAdmin} />
      <Route
        exact
        path="/singleplacementAdmin/:id"
        component={ViewSinglePlacementAdmin}
      />

      <Redirect from="*" to="/" />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
