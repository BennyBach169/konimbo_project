import type { JSX } from "react";
import "./FormPage.css";
import { Form } from "../Form/Form";
import { Intro } from "./Intro/Intro";
import { Parnters } from "./Parnters/Parnters";
import { ProjectsShowcase } from "./ProjectsShowcase/ProjectsShowcase";

export function FormPage(): JSX.Element {
  return (
    <div className="FormPage">
      <Intro />
      <ProjectsShowcase />
      <Form />
      <Parnters />
    </div>
  );
}
