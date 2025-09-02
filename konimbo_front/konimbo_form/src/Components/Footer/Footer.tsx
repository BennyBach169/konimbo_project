import type { JSX } from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";


export function Footer(): JSX.Element {
    return (
        <div className="Footer">
            <div className="logo_footer_container">
                <img src={logo} />
            </div>
            
            <div className="footer_buttons_container">
                <NavLink className={"footer_buttons"} to="/">Terms And Conditions</NavLink>
                <NavLink className={"footer_buttons"} to="/">Privacy Policy</NavLink>
            </div>
        </div>
    );
}
