import { AppRouter } from "./router/AppRouter";
import { TopBar } from "./components";
import { useGetData } from "./hooks";

import "./index.css"

function App() {
    useGetData();

    return (
        <div className="App">
        <TopBar />

        <AppRouter />
        </div>
    );
}

export default App;