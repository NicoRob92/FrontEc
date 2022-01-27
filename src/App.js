import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";

import Navbar from "./containers/Navbar/Navbar";
import Home from "./Views/Home/Home";
import Market from "./Views/Market/Market";
import Detail from "./Views/Detail/Detail";
import Search from "./Views/Search/Search";
import Register from "./Views/Register/Register";
import FormNewPost from "./components/FormNewPost/FormNewPost";

import * as actionCreators from "./ducks/actions/actionCreators";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreators.getCategories());
    dispatch(actionCreators.getPosts());
    dispatch(actionCreators.getCountries());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/market">
          <Market />
        </Route>
        <Route exact path="/detail/:id">
          <Detail />
        </Route>
        <Route exact path="/new-post">
          <FormNewPost />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/search/:name">
          <Search />
        </Route>
      </Switch>
    </>
  );
};

export default App;
