import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createBrowserHistory } from "history";
import * as serviceWorker from "./serviceWorker";
import { Route, Router, Redirect, Switch } from "react-router-dom";
import Blog from "./Blogs/Blog";
import ViewSingleBlog from "./Blogs/ViewSingleBlog";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/singleblog/:id" component={ViewSingleBlog} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
