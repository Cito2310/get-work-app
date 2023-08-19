import { TopBar } from "./components/TopBar";
import { AppRouter } from "./router/AppRouter";

function App() {

  // const onGetData = async() => {
  //   const data = await window.electronAPI.getDataWorks();
  //   window.localStorage.setItem("data", JSON.stringify(data));
  //   setWorksData(data);
  // }



  return (
    <div className="App p-3 bg-slate-200">
      <TopBar />
      
      <AppRouter />
    </div>
  );
}

export default App;