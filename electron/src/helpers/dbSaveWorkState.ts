import { Database } from "../services/database"
import { WorkState } from "../store";

export const dbSaveWorkState = ( data: WorkState ) => {
    const database = new Database();

    database.save({
        nameFile: "workState",
        data: JSON.stringify(data)
    }).then()
}