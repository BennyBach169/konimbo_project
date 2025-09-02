import type { JSX } from "react";
import "./ProjectsShowcase.css";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import videoSlide from "../../../assets/slidingjob_vid.mp4";
import nluxurys from "../../../assets/nluxury_vid.mp4";

export function ProjectsShowcase(): JSX.Element {

    let slidingDiscription = "Sliding Job is revolutionizing the way recruiters and job seekers connect by putting projects and skills first, personalities second.";
    let nluxurysDiscription = "Welcome to N Luxury Real Estate, where your dream home becomes a reality. We are more than just a real estate company—we are your trusted partner in finding the perfect property that embodies luxury, elegance, and sophistication.";


    return (
        <div className="ProjectsShowcase">
            <h2 style={{fontSize: "3.5rem", fontWeight: "bold" }}>My Projects</h2>
			<ProjectCard projectName="Sliding Job" 
            description ={slidingDiscription}
            url="https://slidingjob.com"
            videoUrl={videoSlide} />
            <hr />
            <ProjectCard projectName="N Luxurys" 
            description ={nluxurysDiscription}
            url="https://www.nluxurys.com" 
            videoUrl={nluxurys} />
        </div>
    );
}
