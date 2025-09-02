import type { JSX } from "react";
import "./ProjectCard.css";
import "aos/dist/aos.css";
interface ProjectCardProps {
  projectName: string;
  description: string;
  url: string;
  videoUrl?: string;
}
export function ProjectCard(props: ProjectCardProps): JSX.Element {
  return (
    // <div data-aos="zoom-in">
    <div className="ProjectCard">
        <div className="projects_details">
          <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            {props.projectName}
          </div>
          <p>{props.description}</p>
          <a href={props.url}>Visit Website</a>
        </div>
      {props.videoUrl && (
        <video className="project_video"
          src={props.videoUrl}
          controls
          loop
          muted
          playsInline
        />
      )}
    </div>
    // </div>
  );
}
