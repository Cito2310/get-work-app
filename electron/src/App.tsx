import { useEffect, useState } from "react"

function App() {

  // const onGetData = async() => {
  //   const data = await window.electronAPI.getDataWorks();
  //   window.localStorage.setItem("data", JSON.stringify(data));
  //   setWorksData(data);
  // }



  return (
    <div className="App p-3 bg-slate-200">
      <button className="bg-blue-500 text-white p-2 rounded shadow hover:brightness-90 mb-3" onClick={()=>{}}>Seleccionar datos</button>

      <section className="flex row flex-wrap gap-3">
        Hola
      </section>
    </div>
  );
}

export default App;