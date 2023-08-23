import { WorkOfferExpand } from "../../../types";
import { updateViewed, useAppDispatch } from "../store";

interface props {
    work: WorkOfferExpand;
}

export const CardWork = ({ work }: props) => {
    const { companyName, description, location, modality, status, title, url, viewed } = work; 
    const dispatch = useAppDispatch();

    const onRedirect = () => {
        dispatch( updateViewed({ urlWork: work.url, newState: true }) );
        window.electronAPI.redirect( url );
    };

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
                <button 
                    className='hover:brightness-90 active:brightness-75 transition-base w-[100px] h-full rounded p-1 shadow bg-main' 
                    onClick={ onRedirect }
                >
                    {viewed ? "\u2713 Link" : "Link"}
                </button>
            </div>
        </li>
    )
}