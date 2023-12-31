import { WorkOfferExpand } from '../../../../types';
import { useAppDispatch, updateStatus } from '../../store';
import { WorkCardButton } from '../button/WorkCardButton';
import { BaseCard } from './BaseCard';

interface props {
    work: WorkOfferExpand;
    onlyRejected?: boolean;
}

export const CardWorkFilter = ({ work }: props) => {
    const { companyName, description, location, modality, title, url, includeKeyword } = work; 
    const dispatch = useAppDispatch();

    const onRejected = () => dispatch( updateStatus({ urlWork: url, newStatus: "rejected" }) )
    const onAccepted = () => dispatch( updateStatus({ urlWork: url, newStatus: "accepted" }) )

    return (
        <BaseCard className="min-h-[100px]" border={ includeKeyword }>
            <div className="w-full">
                <div className="flex font-Montserrat gap-[16px] justify-between">

                    <h2 className="font-semibold text-card-title font-Montserrat">{
                        companyName ? `${companyName} - ${title}` : title 
                    }</h2>

                    <p className="font-light text-small flex gap-3">
                        {`${location} - ${modality}`}
                    </p> 

                </div>

                <p className="text-regular font-normal">{ description }</p>
            </div>

            <div className="flex gap-[8px]">
                <WorkCardButton onClick={onRejected} className="h-full w-[40px]" color="secondary" icon="xcross"/>
                <WorkCardButton onClick={onAccepted} className="h-full w-[40px]" color="primary" icon="heart"/>
            </div>
        </BaseCard>
    )
}