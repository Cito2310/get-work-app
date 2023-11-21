import { useForm } from "react-hook-form";
import { WorkOfferExpand } from "../../types";
import { CardEmpty, CardWork, CardWorkFilter } from "./components";
import { MenuButton } from "./components/button/MenuButton";
import { NavigatorBarButton } from "./components/button/NavigatorBarButton";
import { WorkCardButton } from "./components/button/WorkCardButton";
import { BaseCard } from "./components/cards/BaseCard";
import { CardWorkRejected } from "./components/cards/CardWorkRejected";
import { InputText } from "./components/input/InputText";
import { MenuNavigator } from "./components/navigatorBar/MenuNavigator";
import { NavigatorBar } from "./components/navigatorBar/NavigatorBar";
import "./index.css"
import { ConfigMenu } from "./components/misc/ConfigMenu";
import { FilterWorksPage } from "./pages";

const work: WorkOfferExpand = {
    companyName: "Oferta de Desarrollo", 
    date: 34124, 
    description: "Oferta para trabajar en la industria Textil de la zona de San Martin", 
    includeKeyword: false, 
    location: "buenos aires", 
    modality: "remoto", 
    status: "rejected", 
    title: "Oferta de Desarrollo", 
    url: "www.google.com", 
    viewed: false 
}

function Test() {
    const {register, formState, watch } = useForm();

    const fieldValue = watch()
    return (
        <div className="App">
            {/* <WorkCardButton color="secondary" icon="heart" />
            <NavigatorBarButton icon="lens" />
            <MenuButton className="w-[300px]">Filtrar Trabajos</MenuButton> */}

            {/* <BaseCard border ><h1>Hol.a</h1></BaseCard> */}
            {/* <CardWork work={ work } />
            <CardWorkFilter work={ work }  />
            <CardWorkRejected work={ work } /> */}
            {/* <ConfigMenu /> */}
            {/* <NavigatorBar />
            <div className="p-32 flex gap-2">
                <InputText placeholder="Desarrollador" border register={register("name")} icon="xcross"/>
                <InputText placeholder="Desarrollador" border register={register("age")}  icon="plus"/>
                <InputText placeholder="Desarrollador" border register={register("boy")}  />

            </div>

            <code>{JSON.stringify(fieldValue)}</code> */}
            {/* <MenuNavigator /> */}
        </div>
    );
}

export default Test;