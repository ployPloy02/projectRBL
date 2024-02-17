import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './ST'; // Import the Home component
import NextPage from './App'; // Import the NextPage component

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/nextpage" component={NextPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
