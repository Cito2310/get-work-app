import { useMemo } from "react";
import { WorkOfferExpand } from "../../../types"
import { useOnlySearchData } from "./useOnlySearchData";

interface props {
    data: WorkOfferExpand[];
    currentSearch: string;
    isBeingSearched: boolean;
}

export const useFilterData = ({ currentSearch, data, isBeingSearched }:props) => {

    const dataAccepted = useMemo( () => data.filter( work => work.status === "accepted" ), [data] );
    const searchDataAccepted = useOnlySearchData( currentSearch, dataAccepted, isBeingSearched );

    const dataRejected = useMemo( () => data.filter( work => work.status === "rejected" ), [data] );
    const searchDataRejected = useOnlySearchData( currentSearch, dataRejected, isBeingSearched );

    const dataNone = useMemo( () => data.filter( work => work.status === "none" ), [data] );
    const searchDataNone = useOnlySearchData( currentSearch, dataNone, isBeingSearched );

    return {
        dataAccepted,
        searchDataAccepted,
        dataRejected,
        searchDataRejected,
        dataNone,
        searchDataNone,
    }
}