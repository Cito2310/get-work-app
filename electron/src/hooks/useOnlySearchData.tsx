import { useEffect, useState } from "react"
import { WorkOfferExpand } from "../../../types"
import { joinTextWork } from "../helpers/joinTextWork";

export const useOnlySearchData = ( 
    currentSearch: string, 
    data: WorkOfferExpand[], 
    isBeingSearched: boolean
) => {
    const [onlySearchData, setOnlySearchData] = useState<WorkOfferExpand[]>([]);

    useEffect(() => {
        if ( isBeingSearched ) {
            setOnlySearchData(
                data.filter( work => RegExp( currentSearch, "i" ).test( joinTextWork(work) ) )
            )
        }
    
    }, [data, currentSearch, isBeingSearched])
    
    return onlySearchData;
}