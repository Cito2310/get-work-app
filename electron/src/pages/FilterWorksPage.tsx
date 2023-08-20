import { useState } from "react";
import { useAppSelector } from "../store/store"
import { ItemWorkFilter } from "../components/ItemWorkFilter";

export const FilterWorksPage = () => {
    const { data } = useAppSelector( state => state.work )
    const [onlyRejected, setOnlyRejected] = useState(false);

    const onOnlyRejected = () => {
        setOnlyRejected(!onlyRejected)
    }

  return (
    <section>
        <button onClick={ onOnlyRejected } > Ver unicamente rechazados </button>

        <div className="flex flex-col gap-2 px-12 py-3 bg-[#f0f0f0]">
            {
                onlyRejected 
                ? data.map( work => (work.status === "rejected") && <ItemWorkFilter onlyRejected work={ work } key={ work.url } /> )
                : data.map( work => (work.status === "none") && <ItemWorkFilter work={ work } key={ work.url } /> )
            }
        </div>
    </section>
  )
}
