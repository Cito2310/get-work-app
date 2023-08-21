import { ItemWork } from "../components/ItemWork";
import { useAppSelector } from "../store/store"

export const WorksPage = () => {
    const { data } = useAppSelector( state => state.work )

    return (
        <section>
            <div className="flex flex-col gap-3 px-16 py-3">
                {
                    data.map( work => (work.status === "accepted") && <ItemWork work={ work } key={ work.url } /> )
                }
            </div>
        </section>
    )
}
