import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from './routes/routes.json';
import { Nav } from './nav/Nav'
import { LabView } from './views/lab/LabView'
import { HomeView } from './views/home/HomeView'
import { InitativeTrackerView } from './views/initiativeTrackerView/InitiativeTrackerView';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
      
      <Switch>

        <Route path={routes.lab}>
          <LabView />
        </Route>
        
        <Route path={routes.initiativeTracker}>
          <InitativeTrackerView />
        </Route>

        <Route path={routes.home}>
          <HomeView />
        </Route>

      </Switch>
      </div>
    </Router>
  );
}

export default App;
