import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/store"
import { updateStatus } from "../store/work/workSlice";
import { ItemWorkFilter } from "../components/ItemWorkFilter";

export const FilterWorksPage = () => {
    const { data } = useAppSelector( state => state.work )
    const dispatch = useAppDispatch();

    const [onlyRejected, setOnlyRejected] = useState(false);

    const onRejected = ( url: string ) => {
        dispatch( updateStatus({ urlWork: url, newStatus: "rejected" }) )
    }

    const onAccepted = ( url: string ) => {
        dispatch( updateStatus({ urlWork: url, newStatus: "accepted" }) )
    }

    const onOnlyRejected = () => {
        setOnlyRejected(!onlyRejected)
    }

  return (
    <section>
        <button onClick={ onOnlyRejected } > Ver unicamente rechazados </button>

        <div className="flex flex-col gap-2 px-12 py-3 bg-[#f0f0f0]">
            {
                onlyRejected 
                ? data.map( work => (work.status === "rejected") && <ItemWorkFilter work={ work } key={ work.url } /> )
                : data.map( work => (work.status === "none") && <ItemWorkFilter work={ work } key={ work.url } /> )
            }
        </div>
    </section>
  )
}
