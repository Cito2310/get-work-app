import { TIcon } from "../../../types/icon";
import { Icons } from "../misc/Icons";

interface props {
    icon: TIcon;
    color: "primary" | "secondary";
    className?: string;
    onClick: () => void;
}

export const WorkCardButton = ({ icon, color, className, onClick }: props) => (
    <button onClick={ onClick }  className={`
        rounded-md py-[12px] px-[8px] flex justify-center items-center transition-base ${ className }
        ${ color === "primary" && "bg-orange-500 hover:bg-orange-400 active:bg-orange-600 text-font-white" }
        ${ color === "secondary" && "bg-gray-400 hover:bg-gray-500 active:bg-gray-300 text-gray-300 active:text-gray-200" }
    `} >
        <Icons className="text-20px" icon={ icon } />
    </button>
)
