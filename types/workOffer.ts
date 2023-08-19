export interface WorkOffer {
    url:          string;
    companyName:  string | null;
    description:  string | null;
    location:     string | null;
    modality:     string | null;
    title:        string;
}

export interface WorkOfferWithStatus extends WorkOffer {
    status: "rejected" | "accepted" | "none"
}