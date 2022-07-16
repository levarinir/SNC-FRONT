import React from 'react';
import { Link } from 'react-router-dom';
const Header = ({ user, handleLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div
        className="collapse navbar-collapse justify-content-between"
        id="navbarText"
      >
        <div className="navbar-brand">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </div>
        {user && user.username ? (
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <div className="nav-link" onClick={handleLogout}>
                Logout
              </div>
            </li>
          </ul>
        ) : (
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Header;
