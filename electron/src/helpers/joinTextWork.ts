import { WorkOfferWithStatus } from "../../../types/workOffer";

export const joinTextWork = ({ companyName, description, location, modality, status, title, url }: WorkOfferWithStatus ) => {
    return `${companyName} ${description} ${location} ${modality} ${ title} ${url}`
}
