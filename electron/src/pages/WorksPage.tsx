import { useAppSelector } from "../store"
import { ItemWork } from "../components";

export const WorksPage = () => {
    const { data } = useAppSelector( state => state.work )

    return (
        <section>
            <ul className="flex flex-col gap-3 px-16 py-3">
                {
                    data.map( work => (work.status === "accepted") && <ItemWork work={ work } key={ work.url } /> )
                }
            </ul>
        </section>
    )
}
