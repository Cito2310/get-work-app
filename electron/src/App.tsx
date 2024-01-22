import { AppRouter } from "./router/AppRouter";
import { useGetData } from "./hooks";

import "./index.css"
import { NavigatorBar } from "./components/navigatorBar/NavigatorBar";
import { BackgroundImage } from "./components/misc/BackgroundImage";

function App() {
    useGetData();

    return (
        <div className="App">
            <BackgroundImage />
            <NavigatorBar />
            <AppRouter />
        </div>
    );
}

export default App;