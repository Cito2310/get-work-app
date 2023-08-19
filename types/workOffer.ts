export interface WorkOffer {
    url:          string | null;
    companyName:  string | null;
    description:  string | null;
    location:     string | null;
    modality:     string | null;
    title:        string | null;
}

export interface WorkOfferWithStatus extends WorkOffer {
    status: "rejected" | "accepted" | "none"
}