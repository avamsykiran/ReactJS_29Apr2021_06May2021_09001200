import { Component } from "react";

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:0
        };
    }

    upScale = (event) => {
        this.setState({count:this.state.count+1})
    }

    downScale = (event) => {
        this.setState({count:this.state.count-1})
    }

    render(){
        return (
            <section>
                <h3>{this.state.count}</h3>
                <button onClick={this.upScale}>Increment</button>
                <button onClick={this.downScale}>Decrement</button>
            </section>
        );
    }
}

export default Counter;