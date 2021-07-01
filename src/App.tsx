import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { paths } from './routes/paths.json';
import { Nav } from './nav/Nav'
import { LabView } from './views/lab/LabView'
import { HomeView } from './views/home/HomeView'
import { InitativeTrackerView } from './views/initiativeTrackerView/InitiativeTrackerView';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
      </div>
      
      <Switch>

        <Route path={paths.lab}>
          <LabView />
        </Route>
        
        <Route path={paths.initiativeTracker}>
          <InitativeTrackerView />
        </Route>

        <Route path={paths.home}>
          <HomeView />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
