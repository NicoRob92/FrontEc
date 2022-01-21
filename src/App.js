import './App.css';
import Navbar from './containers/Navbar/Navbar';
import Home from './Views/Home/Home';
import Market from './Views/Market/Market';
import { Switch, Route } from 'react-router-dom';
import CardDetail from './components/CardDetail/CardDetail'
import FormNewPost from './components/FormNewPost/FormNewPost';

function App() {
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

export default App;
