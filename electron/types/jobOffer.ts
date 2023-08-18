export interface JobOffer {
    url:          string | null;
    companyName:  string | null;
    description:  string | null;
    location:     string | null;
    modality:     string | null;
    title:        string | null;
}

export interface JobOfferWithId extends JobOffer {
    id: number;
}