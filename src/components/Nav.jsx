import React from "react";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line

const navs = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/services",
    name: "Services",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

const Nav = () => (
  <nav className="bg-white p-4 shadow">
    <ul className="flex space-x-4 justify-end">
      {navs.map((nav) => (
        <li>
          <NavLink

            activeClassName="border-b-2"
            exact
            to={nav.path}
          >
            {nav.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
