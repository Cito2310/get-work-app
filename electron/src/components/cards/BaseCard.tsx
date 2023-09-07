interface props {
    children?: JSX.Element[] | JSX.Element;
    className: string;
}

export const BaseCard = ({ children, className }: props) => (
    <li className={'list-none flex w-full shadow-md rounded-md p-3 bg-white ' + className}>
        { children }
    </li>
)