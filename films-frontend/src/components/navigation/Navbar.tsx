import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="container-fluid position-relative no-side-padding">
        <span className="logo">
          <img
            src={
              "https://res.cloudinary.com/yemiwebby-com-ng/image/upload/v1513770253/WEB_FREAK_50PX-01_yaqxg7.png"
            }
            alt="My Avatar"
          />
        </span>

        <div className="menu-nav-icon" data-nav-menu="#main-menu">
          <i className="ion-navicon" />
        </div>

        <ul className="main-menu visible-on-click" id="main-menu">
          <li>
            <Link className={"nav-link"} to={"/"}>
              {" "}
              Avrioc Films Project{" "}
            </Link>
          </li>
          <li></li>
          <li>
            <Link className={"nav-link"} to={"/"}>
              {" "}
              Home{" "}
            </Link>
          </li>
          <li>
            <Link className={"nav-link"} to={"/create"}>
              {" "}
              Create{" "}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default withRouter(Navbar);
