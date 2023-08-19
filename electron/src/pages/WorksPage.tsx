import { useAppDispatch, useAppSelector } from "../store/store"
import { updateStatus } from "../store/work/workSlice";

export const WorksPage = () => {
    const { data } = useAppSelector( state => state.work )
    const dispatch = useAppDispatch();

    const onRejected = ( url: string ) => {
        dispatch( updateStatus({ urlWork: url, newStatus: "rejected" }) )
    }


  return (
    <section>
        {
            data.map( work => {
                if ( work.status === "accepted" ) return (
                    <article key={ work.url }>
                        { JSON.stringify( work ) }
                        <button onClick={ () => onRejected( work.url ) } >Eliminar</button>
                        <hr className="border border-black"/>
                    </article>
                )
            })
        }
    </section>
  )
}
