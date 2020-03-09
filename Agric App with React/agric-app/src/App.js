import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Hire from './components/MarketPlace/hire';
import Farmer from './components/MarketPlace/farmer';
import Crops from './components/Crops';
import Tomato from './components/Crops/tomato';
import TrackPlant from './components/Crops/trackPlant';
import Buy from "./components/MarketPlace/buy";
import SellProduct from "./components/MarketPlace/sell";
import Homepage from './components/Homepage';
import Signup from './components/Auth/Signup';

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/register' component={Signup}>
            <Signup />
          </Route>
          <Route path='/sell' component={SellProduct}>
            <SellProduct />
          </Route>
          <Route path='/buy' component={Buy}>
            <Buy />
          </Route>
          <Route path='/farmer' component={Farmer}>
            <Farmer />
          </Route>
          <Route path='/hire' component={Hire}>
            <Hire />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/crops'>
            <Crops />
          </Route>
          <Route path='/tomato'>
            <Tomato />
          </Route>
          <Route path="/track-plant">
            <TrackPlant />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path='/'>
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
