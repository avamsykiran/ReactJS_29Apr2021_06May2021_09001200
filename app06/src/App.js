import { Component } from "react";
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Header from "./components/Header";
import TaskManager from "./components/TaskManager";
import Dashboard from "./components/Dashboard";
import TaskForm from "./components/TaskForm";

class App extends Component{
  constructor(props){
    super(props);

    this.state={
      title:"Task Maanger Portal",
      brand:"TMP"
    }
  }

  render(){
    return (
      <Router>
        <Header title={this.state.title} brand={this.state.brand} />
        
        <Switch>
          <Route path="/tasksList" component={TaskManager} />
          <Route path="/addTask" component={TaskForm} />
          <Route path="/editTask/:id" component={TaskForm} />
          <Route path="" component={Dashboard} />
        </Switch>

      </Router>
    );
  }
}
export default App;
