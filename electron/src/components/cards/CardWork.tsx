import { WorkOfferExpand } from "../../../../types";
import { updateViewed, useAppDispatch } from "../../store";
import { WorkCardButton } from "../button/WorkCardButton";
import { BaseCard } from "./BaseCard";

interface props {
    work: WorkOfferExpand;
}

export const CardWork = ({ work }: props) => {
    const { companyName, description, location, modality, title, url, viewed, includeKeyword } = work; 
    const dispatch = useAppDispatch();

    const onRedirect = () => {
        dispatch( updateViewed({ urlWork: work.url, newState: true }) );
        window.electronAPI.redirect( url );
    };

    return (
        <BaseCard className="min-h-[100px]" border={ includeKeyword }>
            <div className="w-full">
                <div className="flex font-Montserrat gap-[16px] justify-between">

                    <h2 className="font-semibold text-card-title font-Montserrat">{
                            companyName ? `${companyName} - ${title}` : title 
                    }</h2>

                    <p className="font-light text-small">{`${location} - ${modality}`}</p> 

                </div>
                
                <p className="text-regular font-normal">{ description }</p>
            </div>

            <div className="flex gap-[8px]">
                <WorkCardButton 
                    onClick={onRedirect} 
                    className={`h-full w-[40px] ${ viewed && "text-black"}`}
                    color="primary" 
                    icon="outbox"
                />
            </div>
        </BaseCard>
    )
}