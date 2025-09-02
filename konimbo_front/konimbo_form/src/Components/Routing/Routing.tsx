import type { JSX } from "react";
import "./Routing.css";import { Route, Routes } from "react-router-dom";
import { FormPage } from "../FormPage/FormPage";
import ScrollToTop from "./ScrollToTop";
import { TablePage } from "../TablePage/TablePage";

export function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <ScrollToTop/>
			<Routes>
                <Route path="" element ={<FormPage/>}/>
                <Route path="/table" element ={<TablePage/>}/>
            </Routes>
        </div>
    );
}
