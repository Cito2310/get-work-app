import { useLayoutEffect, useRef, useState } from "react"
import { NavigatorBarButton } from "../button/NavigatorBarButton"
import { Logo } from "./Logo"
import { MenuNavigator } from "./MenuNavigator";
import { InputText } from "../input/InputText";
import { useSearch } from "../../hooks";

export const NavigatorBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => { setShowMenu(!showMenu) };

    const [search, setSearch] = useState(false);
    const toggleSearch = () => setSearch(!search);   

    const { register } = useSearch();

    const refContainer = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {
        // const heightNavigatorBar = refContainer.current?.clientHeight;
        // document.body.style.marginTop = heightNavigatorBar + "px";
        // return () => { document.body.style.marginTop = "0px" };
    }, [])
    

    return (
        <div className="z-50 fixed top-0" ref={ refContainer }>
            <div className=" flex px-[24px] w-screen bg-orange-500 justify-between">
                <Logo />

                <div className="flex items-center">
                    <InputText
                        register={register("search")}
                        icon="xcross"
                        onClick={toggleSearch}
                        placeholder="Buscar"
                        className="mr-[8px]"
                    />

                    <NavigatorBarButton icon="bars" onClick={toggleMenu} />
                </div>
            </div>
            
            { showMenu && <MenuNavigator /> }
        </div>
    )
}