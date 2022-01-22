import Navbar from "./containers/Navbar/Navbar";
import Home from "./Views/Home/Home";
import Market from "./Views/Market/Market";
import CardDetail from "./components/CardDetail/CardDetail";
import FormNewPost from "./components/FormNewPost/FormNewPost";

import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";

import * as actionCreators from "./ducks/actions/actionCreators";

import "./App.css";

export default function App() {
  const categories = useSelector((state) => state.reducer.categories);
  const products = useSelector((state) => state.reducer.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreators.getCategories());
    dispatch(actionCreators.getProducts());
  }, [dispatch]);

  return (
    <Switch>
      <Route exact path="/">
        <Navbar />
        <Home />
      </Route>
      <Route exact path="/market">
        <Navbar />
        <Market categories={categories} products={products}/>
      </Route>
      <Route exact path="/card">
        <Navbar />
        <CardDetail />
      </Route>
      <Route exact path="/new-post">
        <Navbar />
        <FormNewPost />
      </Route>
    </Switch>
  );
}