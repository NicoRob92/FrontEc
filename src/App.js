import './App.css';
import Navbar from './containers/Navbar/Navbar';
import Home from './Views/Home/Home';
import Market from './Views/Market/Market';
import { Switch, Route } from 'react-router-dom';
import CardDetail from './components/CardDetail/CardDetail'
import FormNewPost from './components/FormNewPost/FormNewPost';
import {useEffect} from "react"
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from "./ducks/actions/actionCreators"

function App(props) {

  useEffect(() => {
    props.getProducts()
    props.getCategories()
    props.getCategoryProducts(1)
  },[])

  return (
    <Switch>
      <Route exact path='/'>       
        <Navbar/>
        <Home/>
      </Route>
      <Route exact path='/market'>
        <Navbar />
        <Market />
      </Route>
      <Route exact path='/card'>
        <Navbar />
        <CardDetail />
      </Route>
      <Route exact path='/new-post'>
        <Navbar />
        <FormNewPost />
      </Route>
      </Switch>
  );
}

function mapDispatchToProps (dispatch){
  return bindActionCreators(actionCreators,dispatch)
}

export default connect(null, mapDispatchToProps)(App);
