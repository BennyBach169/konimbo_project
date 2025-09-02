import type { JSX } from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export function Menu(): JSX.Element {
  return (
    <div className="Menu">
      <div className="menu_logo">
        <img src={logo} className="logo" />
      </div>

      <NavLink to={"/"} className="menu_b">
        Home
      </NavLink>
      <div className="spacer">|</div>
      <NavLink to={"/table"} className="menu_b">
        Table
      </NavLink>
    </div>
  );
}
