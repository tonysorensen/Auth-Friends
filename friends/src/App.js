import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="title">
            <h3>Friends List</h3>
          </div>
          <div className="links">
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/protected">Friends</Link>
              </li>
            </ul>
          </div>
        </header>

        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
