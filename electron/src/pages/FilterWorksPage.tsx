import { useAppSelector } from "../store"
import { CardWorkFilter, ModalNotWork } from "../components";
import { SideBarFilter } from "../components/misc/SideBarFilter";
import { useFilterData } from "../hooks/useFilterData";
import { useOnlyRejected } from "../hooks/useOnlyRejected";

export const FilterWorksPage = () => {
    const { data } = useAppSelector( state => state.work );
    const { currentSearch, isBeingSearched } = useAppSelector( state => state.search );

    const { onOnlyRejected, onlyRejected } = useOnlyRejected();

    const { dataNone, dataRejected, searchDataNone, searchDataRejected } = useFilterData({ currentSearch, data, isBeingSearched });


    return (
        <section>
            <SideBarFilter onOnlyRejected={onOnlyRejected} onlyRejected={onlyRejected} />

            <ul className="flex flex-col gap-3 px-16 py-3">
                { data.length === 0 && <ModalNotWork label="No has seleccionado ningun dato" /> }

                { onlyRejected === true && 
                    (
                        isBeingSearched 
                        ? searchDataRejected.map( work => <CardWorkFilter onlyRejected work={ work } key={ work.url } /> )
                        : dataRejected.map( work => <CardWorkFilter onlyRejected work={ work } key={ work.url } />) 
                    )
                }

                { onlyRejected === false && 
                    (
                        isBeingSearched 
                        ? searchDataNone.map( work => <CardWorkFilter work={ work } key={ work.url } /> )
                        : dataNone.map( work => <CardWorkFilter work={ work } key={ work.url } />) 
                    )
                }
            </ul>
        </section>
    )
}