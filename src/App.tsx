import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header';
import { Home } from './Routes/Home';
import { Search } from './Routes/Search';
import { Tv } from './Routes/Tv';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/tv">
            <Tv/>
          </Route>
          <Route path="/search">
            <Search/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

