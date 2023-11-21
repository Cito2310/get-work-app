import { Icons } from "./Icons"

interface props {
    keyword: string
}

export const ContainerKeyword = ({ keyword }: props) => {
    return (
        <div className="rounded-full px-[10px] py-[6px] bg-gray-500 border border-gray-400 flex gap-[8px]">
            <p className="text-[14px]">{ keyword }</p>
            <button><Icons icon="xcross" /></button>
        </div>
    )
}