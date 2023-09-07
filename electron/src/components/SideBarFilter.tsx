import { Icons } from "./Icons";

interface props {
    onlyRejected: boolean;
    onOnlyRejected: () => void;
}

export const SideBarFilter = ({ onlyRejected, onOnlyRejected }: props) => {
    return (
        <div className="absolute right-0 py-1 rounded-es-md bg-white shadow">
            {
                onlyRejected 
                ? <button className="text-gray-300 text-xl p-2 hover:brightness-90" onClick={ onOnlyRejected }><Icons icon="eye" /></button> 
                : <button className="text-gray-300 text-xl p-2 hover:brightness-90" onClick={ onOnlyRejected }><Icons icon="eye-slash" /></button> 
            }
        </div>
    )
}