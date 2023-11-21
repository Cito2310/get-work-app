import { MenuButton } from "../button/MenuButton"

interface props {
    className?: string;
}

export const MenuNavigator = ({ className }: props) => {
    return (
        <div className={`shadow-1 divide-y w-[250px] absolute right-0 ${className}`}>
            <div>
                <MenuButton onClick={()=>{}}>Filtrar Trabajos</MenuButton>
                <MenuButton onClick={()=>{}}>Trabajos Seleccionados</MenuButton>
            </div>

            <div>
                <MenuButton onClick={()=>{}}>Añadir Datos</MenuButton>
                <MenuButton onClick={()=>{}}>Configuraciones</MenuButton>
            </div>
        </div>
    )
}