import { WorkOfferExpand } from "../../../types";
import { joinTextWork } from "./joinTextWork";

export const detectKeywords = ( workData: WorkOfferExpand ): boolean => {
    const keywords = ["react", "node", "desarrollador", "programador", "front-end", "frontend", "back-end", "backend", "nodejs", "javascript", "typescript", "chaco", "corrientes"];
    const joinText = joinTextWork( workData );

    console.log(joinText)
    return keywords.some(  keyword => new RegExp(keyword, "i").test(joinText) )
}
