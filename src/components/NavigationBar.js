import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar() {
  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/">CodeCaster</Link>
      <div className="navbar-menu">
        <NavLink className="navbar-item" exact to="/" activeClassName="active">Home</NavLink>
        <NavLink className="navbar-item" to="/profile" activeClassName="active">Profile</NavLink>
        <NavLink className="navbar-item" to="/logout" activeClassName="active">Logout</NavLink>
      </div>
    </nav>
  );
}

export default NavigationBar;
