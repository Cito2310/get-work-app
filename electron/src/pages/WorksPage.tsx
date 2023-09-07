import { useAppSelector } from "../store"
import { CardWork } from "../components";
import { ModalNotWork } from "../components/modal/ModalNotWork";
import { useFilterData } from "../hooks/useFilterData";

export const WorksPage = () => {
    const { data } = useAppSelector( state => state.work )
    const { currentSearch, isBeingSearched } = useAppSelector( state => state.search )

    const { dataAccepted, searchDataAccepted } = useFilterData({ currentSearch, data, isBeingSearched });

    return (
        <section>
            <ul className="flex flex-col gap-3 px-16 py-3">
                { !data.find( work => work.status === "accepted" ) && <ModalNotWork label="No hay ofertas a mostrar" /> }

                {
                    isBeingSearched 
                    ? searchDataAccepted.map( work => <CardWork work={ work } key={ work.url } /> )
                    : dataAccepted.map( work => <CardWork work={ work } key={ work.url } /> )
                }
            </ul>
        </section>
    )
}
