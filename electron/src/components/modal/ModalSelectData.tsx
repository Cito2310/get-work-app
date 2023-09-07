import { BaseModal } from "./BaseModal";

interface props {
    onSelectData: () => Promise<void>;
}

export const ModalSelectData = ({ onSelectData }: props) => (
    <BaseModal>
        <h1 className="font-Montserrat font-medium mb-2">Selecciona los datos</h1>

        <button 
            onClick={ onSelectData } 
            className="w-full hover:brightness-90 active:brightness-75 transition-base h-full rounded p-1 shadow bg-main">
                Seleccionar
        </button>
    </BaseModal>
)