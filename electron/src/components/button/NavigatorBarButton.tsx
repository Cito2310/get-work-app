import { TIcon } from "../../../types/icon";
import { Icons } from "../misc/Icons";

interface props {
    icon: TIcon;
    onClick: () => void;
}

export const NavigatorBarButton = ({ icon, onClick }: props) => (
    <button onClick={ onClick } className={`
        w-[40px] h-[48px] flex items-center transition-base text-font-black
        bg-orange-500 hover:bg-orange-400 active:bg-orange-600 justify-center
    `} >
        <Icons className="text-[22px]" icon={ icon } />
    </button>
)
