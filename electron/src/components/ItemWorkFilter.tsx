import { WorkOfferWithStatus } from '../../../types/workOffer'
import { useAppDispatch } from '../store/store';
import { updateStatus } from '../store/work/workSlice';

interface props {
    work: WorkOfferWithStatus;
}

export const ItemWorkFilter = ({ work }: props) => {
    const { companyName, description, location, modality, status, title, url } = work; 
    const dispatch = useAppDispatch();


    const onRejected = () => {
        dispatch( updateStatus({ urlWork: url, newStatus: "rejected" }) )
    }

    const onAccepted = () => {
        console.log(work)
        // dispatch( updateStatus({ urlWork: url, newStatus: "accepted" }) )
    }


    return (
        <li className='list-none flex w-full justify-between gap-8 shadow-md rounded-md p-3 bg-white'>
            <div className='w-full'>
                <div className='flex justify-between gap-3'>
                    {
                        companyName
                        ? <h2 className='font-Montserrat font-medium'>{`${title} - ${companyName}`}</h2>
                        : <h2 className='font-Montserrat font-medium'>{`${title}`}</h2>
                    }
                    <p className='font-Montserrat text-xs text-right whitespace-nowrap'>{`${location} - ${modality}`}</p>
                </div>

                <p className='text-sm h-12'>{ description }</p>
            </div>

            <div className='flex flex-col gap-3'>
                <button className='hover:brightness-90 active:brightness-75 transition-base w-[100px] h-8 rounded shadow bg-gray-100' onClick={ onRejected }>Rechazar</button>
                <button className='hover:brightness-90 active:brightness-75 transition-base w-[100px] h-8 rounded shadow bg-main' onClick={ onAccepted }>Aceptar</button>
            </div>
        </li>
    )
}
