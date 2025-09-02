import type { JSX } from "react";
import "./Parnters.css";
import logo from "../../../assets/partner.png";

export function Parnters(): JSX.Element {
    let logos: string[] = [];
    for (let i = 0; i < 20; i++) {
        logos.push(logo);
    }
    return (
        <div className="Parnters">
            <div className="slider-track">
                {logos.map((logo, index) => (
                    <img key={index} src={logo} alt="" className="parnter_img" />
                ))}
            </div>
        </div>
    );
}
