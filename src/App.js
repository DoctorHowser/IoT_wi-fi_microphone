import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

//login&static views
import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import UserPage from './components/UserPage/UserPage';

//functional views
import Info from './components/Info/Info';
import AddDevice from './components/AddDevice/AddDevice';
import Devices from './components/Devices/Devices';
import Graph from './components/Graph/Graph';
import Instant from './components/Instant/Instant';

import './styles/main.css';

const App = () => (
  <div>
    <Header title="Project Base" />
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/home"
          component={LoginPage}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        <Route
          path="/user"
          component={UserPage}
        />
        <Route
          path="/info"
          component={Info}
        />
        <Route
          path="/addDevice"
          component={AddDevice}
        />
        <Route
          path="/devices"
          component={Devices}
        />
        <Route
          path="/graph"
          component={Graph}
        />
        <Route
          path="/instant"
          component={Instant}
        />
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
);

export default App;