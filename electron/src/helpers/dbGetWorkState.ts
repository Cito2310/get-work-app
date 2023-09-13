import { Database } from "../services/database";
import { WorkState } from "../store";

export const dbGetWorkState = async(): Promise<WorkState | null> => {
    const database = new Database();

    const data: WorkState | null = await database.get({ nameFile: "workState" })

    return data;
}