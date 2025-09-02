import axios from "axios";
import { Record } from "../models/Record";
import { Records } from "../models/Records";
class AirTableService {

    async getRecords() {
        return (await axios.get<Records>("http://localhost:8080/api/table")).data;
    }

    async getRecord(recordId: string){
        return (await axios.get<Record>(`http://localhost:8080/api/table/${recordId}`)).data;
    }

    async addRecord(record: Record){
        return (await axios.post("http://localhost:8080/api/table", record)).data;
    }

    async updateRecord(record: Record){
        return (await axios.put(`http://localhost:8080/api/table/`, record)).data;
    }
    async deleteRecord(recordId: string){
        return (await axios.delete(`http://localhost:8080/api/table/${recordId}`)).data;
    }

}

const airTableService = new AirTableService();
export default airTableService;