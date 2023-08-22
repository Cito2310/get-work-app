import { useState } from "react";
import { useAppSelector } from "../store"
import { ItemWorkFilter, Icons, ContainerNotWork } from "../components";
import { joinTextWork } from "../helpers/joinTextWork";

export const FilterWorksPage = () => {
    const { data } = useAppSelector( state => state.work );
    const { currentSearch } = useAppSelector( state => state.search );
    const [onlyRejected, setOnlyRejected] = useState(false);

    const onOnlyRejected = () => {
        setOnlyRejected(!onlyRejected)
    }

    const dataElement = ( filter?: boolean ) => {
        const dataSelect = filter ? data.filter( work => RegExp( currentSearch, "i" ).test( joinTextWork(work) ) ) : data;

        if ( onlyRejected ) return dataSelect.map( work => (work.status === "rejected") && <ItemWorkFilter onlyRejected work={ work } key={ work.url } /> );
        return dataSelect.map( work => (work.status === "none") && <ItemWorkFilter work={ work } key={ work.url } /> )
    }

  return (
    <section>
        <div className="absolute right-0 py-1 rounded-es-md bg-white shadow">
            {
                onlyRejected 
                ? <button className="text-gray-300 text-xl p-2 hover:brightness-90" onClick={ onOnlyRejected }><Icons icon="eye" /></button> 
                : <button className="text-gray-300 text-xl p-2 hover:brightness-90" onClick={ onOnlyRejected }><Icons icon="eye-slash" /></button> 
            }
        </div>

        <ul className="flex flex-col gap-3 px-16 py-3">
            { data.length === 0 && <ContainerNotWork label="No has seleccionado ningun dato" /> }

            { currentSearch ? dataElement(true) : dataElement() }
        </ul>
    </section>
  )
}
