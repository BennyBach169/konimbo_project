import type { JSX } from "react";
import "./Intro.css";


export function Intro(): JSX.Element {
  return (
    <div className="Intro">

    <video 
      src={"https://d3m9l0v76dty0.cloudfront.net/system/photos/973211/original/84cecb0e286ead29fa0c5d4cabc51499.mp4?1742910697"} 
      autoPlay 
      loop 
      muted 
      playsInline 
      style={{ width: "100%", height: "100%",objectFit: "cover",filter: "brightness(60%)" }}
    />

      <h1>
        A professional and intelligent online store with 
        AI-powered advertising that delivers result<br/>
        <span style={{fontWeight:"normal"}}>turn your business into an online empire</span>
      </h1>
      <div className="into_bttons">
        <button className="intro_btn">Call Us</button>
        <button className="intro_btn">Message Us</button>
      </div>
    </div>
  );
}
