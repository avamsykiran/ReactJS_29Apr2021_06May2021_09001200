import { Component, Fragment } from 'react';

class Header extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Fragment>
                <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                    <a href="#" className="navbar-brand">{this.props.brand}</a>
                </nav>
                <header className="jumbotron m-0">
                    <h2>{this.props.title}</h2>
                </header>
            </Fragment>
        );
    }
}

export default Header;