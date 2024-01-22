import { NavLink } from "react-router-dom";
import { MenuButton } from "../button/MenuButton"
import { startAddWorks, useAppDispatch } from "../../store";

interface props {
    className?: string;
}

export const MenuNavigator = ({ className }: props) => {
    const dispatch = useAppDispatch();

    const onAddWorks = async() => {
        await dispatch( startAddWorks() );
    }

    return (
        <div className={`shadow-1 divide-y w-[250px] absolute right-0 ${className}`}>
            <nav>
                <NavLink to={"/filterWorks"}><MenuButton>Filtrar Trabajos</MenuButton></NavLink>
                <NavLink to={"/works"}><MenuButton>Trabajos Seleccionados</MenuButton></NavLink>
            </nav>

            <div>
                <MenuButton onClick={ onAddWorks }>Añadir Datos</MenuButton>
                {/* TODO CREAR EL ESTADO DE LAS CONFIGURACIONES */}
                <MenuButton onClick={()=>{}}>Configuraciones</MenuButton>
            </div>
        </div>
    )
}