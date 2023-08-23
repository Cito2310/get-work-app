import { useEffect } from 'react'
import { useAppDispatch, setWorksLocalStorage } from '../store';

export const useGetData = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const dataInLocalStorage = window.localStorage.getItem("state-work");
        if ( !dataInLocalStorage ) return;
        const dataParse = JSON.parse( dataInLocalStorage );
        dispatch( setWorksLocalStorage( dataParse ) );
    }, [])
}