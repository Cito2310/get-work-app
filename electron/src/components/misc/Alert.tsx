interface props {
    title: string;
    description?: string;
}

export const Alert = ({ title, description }: props) => {
    return (
        <>
            <div className="z-30 rounded-[8px] px-[24px] py-[16px] bg-white w-[400px] left-0 right-0 m-auto absolute top-32">
                <h1 className="text-card-title font-semibold font-Montserrat">{title}</h1>
                { description && <p className="text-[14px]">{ description }</p> }
            </div>

            <div className="z-20 w-screen h-screen absolute top-0 right-0 bg-[#00000030]"></div>
        </>
    )
}