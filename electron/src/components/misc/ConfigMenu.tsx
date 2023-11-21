import { useForm } from "react-hook-form"
import { InputText } from "../input/InputText"
import { ContainerKeyword } from "./ContainerKeyword"
import { Icons } from "./Icons"
import { useState } from "react"

export const ConfigMenu = () => {
    // TODO : Añadir nuevos store que controle las keyword
    const [keywords, setKeywords] = useState<string[]>(["Desarrollador", "Developer"]);
    const { getValues, register, reset } = useForm<{name:string}>();

    const onAddKeyword = ( event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        const value = getValues("name");

        reset();

        // Check Repeat Value
        const existValue = keywords.find(( keyword ) => keyword === value );
        if ( existValue ) return;

        // Check not empty Value
        if ( value.trim().length === 0 ) return;
        setKeywords([...keywords, value]);
        console.log(existValue)
    }

    return (
        <>
            <div className="z-30 flex flex-col gap-[10px] px-[24px] py-[16px] bg-font-white rounded-[8px] w-[500px] left-0 right-0 absolute m-auto top-12">
                <div className="flex flex-row justify-between items-center">
                    <h1 className="text-card-title font-semibold font-Montserrat">Configuraciones</h1>

                    <button className="text-[24px]">
                        <Icons icon="xcross"/>
                    </button>
                </div>

                <p className="text-[14px]">Palabras Claves</p>
                <form onSubmit={ onAddKeyword } >
                    <InputText 
                        className="w-full" 
                        register={register("name")}
                        icon="plus"
                        submit
                        border 
                    />
                </form>

                <div className="flex flex-wrap gap-[10px]">
                    {
                        keywords.map(( name )=>
                            <ContainerKeyword key={ name } keyword={ name } />
                        )
                    }
                </div>

            </div>

            <div className="z-20 w-screen h-screen absolute top-0 right-0 bg-[#00000010]"></div>
        </>
    )
}