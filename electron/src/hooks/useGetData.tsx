import { useEffect } from 'react'
import { useAppDispatch, setWorks } from '../store';
import { WorkOfferExpand } from '../../../types';
import { dbGetWorkState } from '../helpers/dbGetWorkState';

export const useGetData = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const asyncFunc = async() => {
            let dataStateWork = await dbGetWorkState();

            if ( !dataStateWork ) return;
            
            const currentDate = new Date( new Date().toDateString() ).getTime();
            const dayToMs = 86400000 * 2;
            
            dataStateWork.data = dataStateWork.data.filter((work: WorkOfferExpand) => work.date > currentDate-dayToMs );

            dispatch( setWorks( dataStateWork ) );
        }

        asyncFunc().then();
    }, [])
}