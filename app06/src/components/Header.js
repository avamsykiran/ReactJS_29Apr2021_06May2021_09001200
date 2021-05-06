import { Component } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ brand }) => (
    <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="#" className="navbar-brand">{brand}</a>

        <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/tasksList" className="nav-link">Task List</Link>
            </li>
            <li className="nav-item">
                <Link to="/addTask" className="nav-link">New Task</Link>
            </li>
        </ul>
    </nav>
);

export default Header;