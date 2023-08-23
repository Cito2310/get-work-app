import { WorkOfferExpand } from "../../../types"

export const joinTextWork = ({ companyName, description, location, modality, status, title, url }: WorkOfferExpand ) => {
    return `${companyName} ${description} ${location} ${modality} ${ title} ${url}`
}
