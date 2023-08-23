import { useAppSelector } from "../store"
import { CardWork } from "../components";
import { ModalNotWork } from "../components/ModalNotWork";
import { joinTextWork } from "../helpers/joinTextWork";

export const WorksPage = () => {
    const { data } = useAppSelector( state => state.work )
    const { currentSearch } = useAppSelector( state => state.search )

    return (
        <section>
            <ul className="flex flex-col gap-3 px-16 py-3">
                { !data.find( work => work.status === "accepted" ) && <ModalNotWork label="No hay ofertas a mostrar" /> }

                {
                    currentSearch 
                    ? data
                        .filter( work => RegExp( currentSearch, "i" ).test( joinTextWork(work) ) )
                        .map( work => (work.status === "accepted") && <CardWork work={ work } key={ work.url } />)

                    : data.map( work => (work.status === "accepted") && <CardWork work={ work } key={ work.url } /> )
                }
            </ul>
        </section>
    )
}
