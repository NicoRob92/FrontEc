import './App.css';
import Navbar from './containers/Navbar/Navbar';
import Home from './Views/Home/Home';
import Market from './Views/Market/Market';
import { Switch, Route } from 'react-router-dom';
import CardDetail from './components/CardDetail/CardDetail'


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
      

      </Switch>
  );
}

export default App;
