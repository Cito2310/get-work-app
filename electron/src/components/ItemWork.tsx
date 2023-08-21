import { WorkOfferWithStatus } from '../../../types/workOffer'

interface props {
    work: WorkOfferWithStatus;
}

export const ItemWork = ({ work }: props) => {
    const { companyName, description, location, modality, status, title, url } = work; 

    const onRedirect = () => {
        window.electronAPI.redirect( url );
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

                <p className='text-sm'>{ description }</p>
            </div>

            <div className='flex flex-col gap-3'>
                <button className='hover:brightness-90 active:brightness-75 transition-base w-[100px] h-full rounded p-1 shadow bg-main' onClick={ onRedirect }>Link</button>
            </div>
        </li>
    )
}