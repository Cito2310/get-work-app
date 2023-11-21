interface props {
    children?: JSX.Element[] | JSX.Element;
    className?: string;
    border?: boolean;
}

export const BaseCard = ({ children, className, border }: props) => (
    <li className={
        'px-[24px] py-[16px] gap-[16px] list-none flex w-full shadow-1 rounded-[8px] bg-font-white text-font-black flex-row justify-between ' 
        + ( className+" " || " " )
        + ( border ? 'border border-orange-500' : ' ' )
    }>
        { children }
    </li>
)