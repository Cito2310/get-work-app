import { useAppSelector } from "../store"
import { useFilterData } from "../hooks/useFilterData";
import { Alert } from "../components/misc/Alert";
import { CardWork } from "../components/cards/CardWork";

export const WorksPage = () => {
    const { data } = useAppSelector( state => state.work )
    const { currentSearch, isBeingSearched } = useAppSelector( state => state.search )

    const { dataAccepted, searchDataAccepted } = useFilterData({ currentSearch, data, isBeingSearched });

    return (
        <section>
            <ul className="flex flex-col gap-3 px-16 py-3">
                { !data.find( work => work.status === "accepted" ) && <Alert title="No hay ofertas a mostrar" /> }

                {
                    isBeingSearched 
                    ? searchDataAccepted.map( work => <CardWork work={ work } key={ work.url } /> )
                    : dataAccepted.map( work => <CardWork work={ work } key={ work.url } /> )
                }
            </ul>
        </section>
    )
}