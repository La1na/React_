import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Главная</NavLink> |{" "}
      <NavLink to="/articles">Статьи</NavLink>
    </nav>
  );
};

export default Navbar;
