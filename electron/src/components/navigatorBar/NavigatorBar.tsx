import { useState } from "react"
import { NavigatorBarButton } from "../button/NavigatorBarButton"
import { Logo } from "./Logo"
import { MenuNavigator } from "./MenuNavigator";

export const NavigatorBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => { setShowMenu(!showMenu) };

    return (
        <div>
            <div className="flex px-[24px] w-screen bg-orange-500 justify-between">
                <Logo />
                <div className="flex">
                <NavigatorBarButton icon="lens" onClick={()=>{}} />
                <NavigatorBarButton icon="bars" onClick={toggleMenu} />
                </div>
            </div>
            
            { showMenu && <MenuNavigator /> }
        </div>
    )
}