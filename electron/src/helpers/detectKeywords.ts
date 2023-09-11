import { WorkOfferExpand } from "../../../types";
import { joinTextWork } from "./joinTextWork";

export const detectKeywords = ( workData: WorkOfferExpand ): boolean => {
    const keywords = ["react", "node", "desarrollador", "programador", "front-end", "frontend", "back-end", "backend", "nodejs", "javascript", "typescript"];
    const joinText = joinTextWork( workData );

    return keywords.some(  keyword => joinText.includes( keyword ))
}
