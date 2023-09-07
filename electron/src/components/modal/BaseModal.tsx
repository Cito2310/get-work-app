interface props {
    children: JSX.Element[] | JSX.Element;
}

export const BaseModal = ({ children }: props) => (
    <div className="absolute top-20 left-0 right-0 m-auto w-[400px] p-3 bg-white rounded-md z-40">
        { children }
    </div>
)