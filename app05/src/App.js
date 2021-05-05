import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import TaskManager from "./components/TaskManager";
import Dashboard from "./components/Dashboard";
import TaskForm from "./components/TaskForm";

const App = (props) => (
  <Router>
    <Header brand="TMP" />

    <Switch>
      <Route path="/tasksList" component={TaskManager} />
      <Route path="/addTask" component={TaskForm} />
      <Route path="/editTask/:id" component={TaskForm} />
      <Route path="" component={Dashboard} />
    </Switch>

  </Router>
);

export default App;
