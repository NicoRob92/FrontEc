import Navbar from "./containers/Navbar/Navbar";
import Home from "./Views/Home/Home";
import Market from "./Views/Market/Market";
import CardDetail from "./components/CardDetail/CardDetail";
import FormNewPost from "./components/FormNewPost/FormNewPost";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";

import * as actionCreators from "./ducks/actions/actionCreators";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreators.getCategories());
    dispatch(actionCreators.getProducts());
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
        <Route exact path="/card">
          <CardDetail />
        </Route>
        <Route exact path="/new-post">
          <FormNewPost />
        </Route>
      </Switch>
    </>
  );
};

export default App;
