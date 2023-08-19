import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/store"
import { updateStatus } from "../store/work/workSlice";

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

        {
            onlyRejected 
            ? data.map( work => {
                if ( work.status === "rejected" ) return (
                    <article key={ work.url }>
                        { JSON.stringify( work ) }
                        <br/>
                        <button onClick={() => onRejected(work.url)} >Rechazar</button>
                        <button onClick={() => onAccepted(work.url)} >Aceptar</button>
                        <hr className="border border-black"/>
                    </article>
                )})

            : data.map( work => {
                if ( work.status === "none" ) return (
                    <article key={ work.url }>
                        { JSON.stringify( work ) }
                        <br/>
                        <button onClick={() => onRejected(work.url)} >Rechazar</button>
                        <button onClick={() => onAccepted(work.url)} >Aceptar</button>
                        <hr className="border border-black"/>
                    </article>
                )})
        }
    </section>
  )
}
