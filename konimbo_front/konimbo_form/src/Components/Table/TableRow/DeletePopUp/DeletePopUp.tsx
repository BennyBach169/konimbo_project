import type { JSX } from "react";
import "./DeletePopUp.css";
import type { Record } from "../../../../models/Record";
import airTableService from "../../../../services/AirTableService";
import { showErrorToast, showSuccessToast } from "../../../ToastNotifications";

interface DeletePopUpProps {
    handleBack: () => void;
    updateData: () => void;
    record: Record
}

export function DeletePopUp(props: DeletePopUpProps): JSX.Element {
    function handleDelete() {
      airTableService.deleteRecord(props.record.id!)
      .then(()=>{
        showSuccessToast("Record deleted successfully");
        props.updateData();
        props.handleBack()
      })
      .catch((err)=>{
        showErrorToast(err.response?.data);
      })
    }
    return (
        <div className="DeletePopUp">
            <tr onClick={props.handleBack}> 
                X
            </tr>
			<h2>Are you sure you want to delete this record?</h2>
            <div>
                <button onClick={handleDelete}>Yes</button>
                <button onClick={props.handleBack}>No</button>
            </div>
        </div>
    );
}
