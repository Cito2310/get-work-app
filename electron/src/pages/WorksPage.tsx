import { useAppSelector } from "../store"
import { ItemWork } from "../components";
import { ContainerNotWork } from "../components/ContainerNotWork";
import { joinTextWork } from "../helpers/joinTextWork";

export const WorksPage = () => {
    const { data } = useAppSelector( state => state.work )
    const { currentSearch } = useAppSelector( state => state.search )

    return (
        <section>
            <ul className="flex flex-col gap-3 px-16 py-3">
                { !data.find( work => work.status === "accepted" ) && <ContainerNotWork label="No hay ofertas a mostrar" /> }

                {
                    currentSearch 
                    ? data
                        .filter( work => RegExp( currentSearch, "i" ).test( joinTextWork(work) ) )
                        .map( work => (work.status === "accepted") && <ItemWork work={ work } key={ work.url } />)

                    : data.map( work => (work.status === "accepted") && <ItemWork work={ work } key={ work.url } /> )
                }
            </ul>
        </section>
    )
}
