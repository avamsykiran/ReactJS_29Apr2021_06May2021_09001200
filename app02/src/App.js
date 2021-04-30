import { Component, Fragment } from "react";
import Header from "./components/Header";
import TaskManager from "./components/TaskManager";

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
      <Fragment>
        <Header title={this.state.title} brand={this.state.brand} />
        <TaskManager />
      </Fragment>
    );
  }
}
export default App;
