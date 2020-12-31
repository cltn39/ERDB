import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
      <img
          src="https://w.namu.la/s/5e56dae1e75c283329f58c53110df3d7b418a1e44cc93615bee3fcf592d1cae2f861027a6066e24c28eae90a8ec94e958913c7cad4f238d364649b538e04f730c3df46b3401087e20dcef11e216f5deb63b17fa21deca6a0832a9bc6ae007a3f"
          width="110"
          height="50"
          alt=""
        />  LumiaDB
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Main
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/discover"
              className={
                window.location.pathname === "/discover"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              build
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/search"
              className={
                window.location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              items
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
