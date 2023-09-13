import { WorkOfferExpand } from '../../../../types';
import { detectKeywords } from '../../helpers/detectKeywords';
import { useAppDispatch, updateStatus } from '../../store';
import { BaseCard } from './BaseCard';

interface props {
    work: WorkOfferExpand;
    onlyRejected?: boolean;
}

export const CardWorkFilter = ({ work, onlyRejected }: props) => {
    const { companyName, description, location, modality, status, title, url } = work; 
    const dispatch = useAppDispatch();
    const includeKeyword = detectKeywords( work );

    const onRejected = () => dispatch( updateStatus({ urlWork: url, newStatus: "rejected" }) )
    const onAccepted = () => dispatch( updateStatus({ urlWork: url, newStatus: "accepted" }) )

    return (
        // <BaseCard className={`justify-between gap-8`}>
        <BaseCard className={`justify-between gap-8 ${ includeKeyword ? "border border-green-700" : "" }`}>
            <div className='w-full'>
                <div className='flex justify-between gap-3'>
                    {
                        companyName
                        ? <h2 className='font-Montserrat font-medium'>{`${title} - ${companyName}`}</h2>
                        : <h2 className='font-Montserrat font-medium'>{`${title}`}</h2>
                    }
                    <p className='font-Montserrat text-xs text-right whitespace-nowrap'>{`${location} - ${modality}`}</p>
                </div>

                <p className='text-sm'>{ description }</p>
            </div>

            <div className='flex flex-col gap-3'>
                { !onlyRejected && <button className='hover:brightness-90 active:brightness-75 transition-base w-[100px] h-full rounded p-1 shadow bg-gray-100' onClick={ onRejected }>Rechazar</button>}
                <button className='hover:brightness-90 active:brightness-75 transition-base w-[100px] h-full rounded p-1 shadow bg-main' onClick={ onAccepted }>Aceptar</button>
            </div>
        </BaseCard>
    )
}