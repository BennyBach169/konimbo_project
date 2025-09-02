import type { JSX } from "react";
import "./TablePage.css";
import { Table } from "../Table/Table";

export function TablePage(): JSX.Element {
    return (
        <div className="TablePage">
			<Table/>
        </div>
    );
}
