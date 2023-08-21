import { useEffect } from 'react'
import { useAppDispatch, setWorksLocalStorage } from '../store';

export const useGetData = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const dataInLocalStorage = window.localStorage.getItem("state-work");
        const dataParse = JSON.parse( dataInLocalStorage || "null" );
        dispatch( setWorksLocalStorage( dataParse ) );
    }, [])
}