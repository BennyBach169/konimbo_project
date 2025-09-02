import { useEffect, useState, type JSX } from "react";
import "./Table.css";
import { TableRow } from "./TableRow/TableRow";
import type { Records } from "../../models/Records";
import airTableService from "../../services/AirTableService";

export function Table(): JSX.Element {
  const [Records, setRecords] = useState<Records>();

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    airTableService
      .getRecords()
      .then((data) => {
        setRecords(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="Table">
      <div className="const_params">
        <div className="param">Name</div>
        <div className="param">Email</div>
        <div className="param">Phone Number</div>
        <div className="param">Message</div>
        <div className="param">Modifay</div>
      </div>
      {Records?.records.map((record) => {
        return <TableRow key={record.id} record={record} updateData={getData} />;
      })}
    </div>
  );
}
