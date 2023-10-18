import { WorkOffer } from "./workOffer";

export interface WorkOfferExpand extends WorkOffer {
    status: "rejected" | "accepted" | "none";
    viewed: boolean;
    date: number;
    includeKeyword: boolean;
}