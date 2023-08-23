interface props {
    onSelectData: () => Promise<void>;
}

export const ModalSelectData = ({ onSelectData }: props) => (
    <div className="absolute top-20 left-0 right-0 m-auto w-[400px] p-3 bg-white rounded-md">

        <h1 className="font-Montserrat font-medium mb-2">Selecciona los datos</h1>

        <button 
            onClick={ onSelectData } 
            className="w-full hover:brightness-90 active:brightness-75 transition-base h-full rounded p-1 shadow bg-main">
                Seleccionar
        </button>
        
    </div>
)