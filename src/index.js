import React from "react";
import ReactDOM from "react-dom";
import SnackBar from "./Components/SnackBar";
import * as serviceWorker from "./serviceWorker";
import { createBrowserHistory } from "history";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch, Router } from "react-router-dom";
import Home from "./Views/Homepage/Home";
import Navbar from "./Views/Homepage/Navbar";
import About from "./Views/Homepage/About";
import ViewContest from "./Views/Homepage/ViewContest";
import ViewBlog from "./Views/Blogs/Blog";
import SingleBlog from "./Views/Blogs/ViewSingleBlog";
import SingleBlogAdmin from "./Views/BlogsAdmin/ViewSingleBlogAdmin";
import ViewPlacement from "./Views/Placements/Placement";
import SinglePlacement from "./Views/Placements/ViewSinglePlacement";
import SinglePlacementAdmin from "./Views/PlacementsAdmin/ViewSinglePlacementAdmin";
import AdminBlog from "./Views/BlogsAdmin/BlogAdmin";
import AdminPlacement from "./Views/PlacementsAdmin/PlacementAdmin";
import Admin from "./Views/Admin/Admin";
// import AddContest from "./Views/Admin/AddContest";
import O1coding from "./Views/Homepage/O(1)coding";
import DailyCoding from "./Views/Homepage/DailyCoding";
import Hiring from "./Views/Homepage/HiringContest";
import AdminViewContest from "./Views/Admin/AdminViewContest";
<<<<<<< HEAD
import Footer from './Views/footer/footer';
=======
import { Provider } from "react-redux";
import store from "./Components/ConfigureStore";

>>>>>>> dc8773d857e32307dfec78c375110dde0be65d9a
const hist = createBrowserHistory();

ReactDOM.render(
  <>
<<<<<<< HEAD
    <Router history={hist}>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Home />
          <Footer/>
        </Route>
        <Route exact path="/about">
          <Navbar />
          <About />
        </Route>
        <Route exact path="/contest">
          <Navbar />
          <ViewContest />
        </Route>
        <Route exact path="/O1coding">
          <Navbar />
          <O1coding />
        </Route>
        <Route exact path="/dailyCoding">
          <Navbar />
          <DailyCoding />
        </Route>
        <Route exact path="/hiring">
          <Navbar />
          <Hiring />
        </Route>
        <Route exact path="/blog">
          <ViewBlog />
        </Route>
        <Route exact path="/singleblog/:id">
          <SingleBlog />
        </Route>
        <Route exact path="/singleblogadmin/:id">
          <SingleBlogAdmin />
        </Route>
        <Route exact path="/adminBlog">
          <Admin />
          <AdminBlog />
        </Route>
        <Route exact path="/placement">
          <ViewPlacement />
        </Route>
        <Route exact path="/singleplacement/:id">
          <SinglePlacement />
        </Route>
        <Route exact path="/singleplacementadmin/:id">
          <SinglePlacementAdmin />
        </Route>
        <Route exact path="/adminPlacement">
          <Admin />
          <AdminPlacement />
        </Route>
        <Route exact path="/adminContest">
          <Admin />
          <AdminViewContest />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
=======
    <Provider store={store}>
      <SnackBar />
      <Router history={hist}>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Home />
          </Route>
          <Route exact path="/about">
            <Navbar />
            <About />
          </Route>
          <Route exact path="/contest">
            <Navbar />
            <ViewContest />
          </Route>
          <Route exact path="/O1coding">
            <Navbar />
            <O1coding />
          </Route>
          <Route exact path="/dailyCoding">
            <Navbar />
            <DailyCoding />
          </Route>
          <Route exact path="/hiring">
            <Navbar />
            <Hiring />
          </Route>
          <Route exact path="/blog">
            <ViewBlog />
          </Route>
          <Route exact path="/singleblog/:id">
            <SingleBlog />
          </Route>
          <Route exact path="/singleblogadmin/:id">
            <SingleBlogAdmin />
          </Route>
          <Route exact path="/adminBlog">
            <Admin />
            <AdminBlog />
          </Route>
          <Route exact path="/placement">
            <ViewPlacement />
          </Route>
          <Route exact path="/singleplacement/:id">
            <SinglePlacement />
          </Route>
          <Route exact path="/singleplacementadmin/:id">
            <SinglePlacementAdmin />
          </Route>
          <Route exact path="/adminPlacement">
            <Admin />
            <AdminPlacement />
          </Route>
          <Route exact path="/adminContest">
            <Admin />
            <AdminViewContest />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </Provider>
>>>>>>> dc8773d857e32307dfec78c375110dde0be65d9a
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
