import React from 'react';
import Header from './Header';
import Counter from './Counter';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title:"My First Angular App"
        };
    }

    render() {
        return (
            <React.Fragment>
                <Header title={this.state.title} />
                <Counter />
            </React.Fragment>
        );
    }
}

export default App;