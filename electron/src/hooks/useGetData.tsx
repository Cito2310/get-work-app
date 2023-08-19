import { useEffect } from 'react'
import { useAppDispatch } from '../store/store';
import { setWorksLocalStorage } from '../store/work/workSlice';

export const useGetData = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const dataInLocalStorage = window.localStorage.getItem("state-work");
        const dataParse = JSON.parse( dataInLocalStorage || "null" );
        dispatch( setWorksLocalStorage( dataParse ) );
    }, [])
}
