import { useEffect, useState } from "react"
import { JobOffer } from "../types/jobOffer";

function App() {
  const [worksData, setWorksData] = useState<JobOffer[]>([]);

  useEffect(() => {
    const dataSaved = JSON.parse( window.localStorage.getItem("data") || "[]" );
    setWorksData(dataSaved);
  }, [])
  

  const onGetData = async() => {
    const data = await window.electronAPI.getDataWorks();
    window.localStorage.setItem("data", JSON.stringify(data));
    setWorksData(data);
  }



  return (
    <div className="App p-3 bg-slate-200">
      <button className="bg-blue-500 text-white p-2 rounded shadow hover:brightness-90 mb-3" onClick={onGetData}>Seleccionar datos</button>

      <section className="flex row flex-wrap gap-3">
        {
          worksData.map(({ companyName, description, location, modality, title, url }) => 
            <article className="flex-1 flex flex-col justify-between min-w-[400px] bg-slate-300 p-3 rounded-md" key={url}>
              <div>
                <h1 className="text-xl font-Montserrat font-medium">{ title }</h1>
                <h2 className="text-base font-Montserrat h-12">{ companyName } | { location } - { modality }</h2>
                <hr className="border-slate-400 my-1"></hr>
              </div>

              <div className="h-24 scrollbar-hide overflow-scroll">
                <p>{ description }</p>
              </div>

              <div className="flex gap-1 mt-2">
                <button className="hover:brightness-90 flex-1 py-0.5 rounded bg-red-400">Eliminar</button>
                <button className="hover:brightness-90 flex-1 py-0.5 rounded bg-blue-400">Aceptar</button>
              </div>
            </article>
          )
        }
      </section>
    </div>
  );
}

export default App;
