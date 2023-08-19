import { TopBar } from "./components/TopBar";
import { useGetData } from "./hooks/useGetData";
import { AppRouter } from "./router/AppRouter";
import { useAppSelector } from "./store/store";

function App() {

  useGetData();

  const state = useAppSelector( state => state.work);

  return (
    <div className="App p-3 bg-slate-200">
      <TopBar />

      <AppRouter />

      {/* <code>{ JSON.stringify( state ) }</code> */}
    </div>
  );
}

export default App;