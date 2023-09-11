import { useEffect } from 'react'
import { useAppDispatch, setWorksLocalStorage } from '../store';
import { WorkOfferExpand } from '../../../types';

export const useGetData = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const dataInLocalStorage = window.localStorage.getItem("state-work");
        if ( !dataInLocalStorage ) return;

        const currentDate = new Date( new Date().toLocaleDateString() ).getTime();
        const dayToMs = 86400000 * 2;

        let dataParse = JSON.parse( dataInLocalStorage );
        dataParse.data = dataParse.data.filter((work: WorkOfferExpand) => work.date > currentDate-dayToMs );

        dispatch( setWorksLocalStorage( dataParse ) );
    }, [])
}