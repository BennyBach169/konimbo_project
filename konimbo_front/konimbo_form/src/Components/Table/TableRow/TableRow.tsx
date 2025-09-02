import { useState, type JSX } from "react";
import "./TableRow.css";
import type { Record } from "../../../models/Record";
import { FaRegEdit } from "react-icons/fa";
import { FiDelete } from "react-icons/fi";
import { DeletePopUp } from "./DeletePopUp/DeletePopUp";

interface TableRowProps {
  record: Record;
  updateData: () => void;
}
export function TableRow(props: TableRowProps): JSX.Element {
  const [deleteClicked, setDeleteClicked] = useState<boolean>(false);
  // const [editClicked, setEditClicked] = useState<boolean>(false);

  function handleBack() {
    setDeleteClicked(false);
  }

  return (
    <div className="TableRow">
      <div className="params_container">
        <div className="params">
          <div className="row_param">{props.record.fields.name}</div>
          <div className="row_param">{props.record.fields.email}</div>
          <div className="row_param">{props.record.fields.phoneNumber}</div>
          <div className="row_param">{props.record.fields.message}</div>
          <div className="row_param">
            <tr className="icons_container">
              <button className="icon">
                <FaRegEdit />
              </button>
              <button className="icon" onClick={() => setDeleteClicked(true)}>
                <FiDelete />
              </button>
            </tr>
          </div>
        </div>
      </div>
      {deleteClicked && (
        <DeletePopUp handleBack={handleBack} record={props.record} updateData={props.updateData} />
      )}
    </div>
  );
}
