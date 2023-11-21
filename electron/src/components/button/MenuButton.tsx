interface props {
    className?: string;
    children: string;
    onClick: () => void;
}

export const MenuButton = ({ className, children, onClick }: props) => (
    <button 
        onClick={ onClick } 
        type="button" 
        className={`
            px-[12px] py-[6px] w-full bg-white text-left
            font-normal text-font-black hover:bg-gray-500 active:bg-gray-400 transition-base
            ${className}
        `}
    >
        { children }
    </button>
)
