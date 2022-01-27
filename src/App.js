import Navbar from "./containers/Navbar/Navbar";
import Home from "./Views/Home/Home";
import Market from "./Views/Market/Market";
import Detail from "./Views/Detail/Detail";
import Search from './Views/Search/Search'
import FormNewPost from "./components/FormNewPost/FormNewPost";
import { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";

import * as actionCreators from "./ducks/actions/actionCreators";

import "./App.css";
import Register from "./Views/Register/Register";

const App = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.reducer.post);
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
          <Home post= {post} />
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
          <Register/>
      </Route>
      <Route exact path="/search/:name">
          <Search />
      </Route>
      </Switch>
    </>
  );
};

export default App;
