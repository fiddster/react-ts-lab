import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppRoutes from './routes/AppRoutes';
import { Nav } from './nav/Nav'
import { LabView } from './views/lab/LabView'
import { HomeView } from './views/home/HomeView'
import { InitativeTrackerView } from './views/initiativeTrackerView/InitiativeTrackerView';
import { SpellsView } from "./views/spells/SpellsView";

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />

                <Switch>

                    <Route path={AppRoutes.lab}>
                        <LabView />
                    </Route>

                    <Route path={AppRoutes.initiativeTracker}>
                        <InitativeTrackerView />
                    </Route>
                    <Route path={AppRoutes.spells}>
                        <SpellsView />
                    </Route>
                    
                    <Route path={AppRoutes.home}>
                        <HomeView />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}

export default App;
