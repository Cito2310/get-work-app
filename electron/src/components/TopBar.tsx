import { NavLink } from 'react-router-dom'

export const TopBar = () => {
    return (
        <div className='px-6 bg-main font-Montserrat'>
            <nav className='flex gap-3'>
                <NavLink className="py-2 w-[120px] flex justify-center hover:bg-[#ffffff20]" to={"selectData"}>Select Data</NavLink>
                <NavLink className="py-2 w-[120px] flex justify-center hover:bg-[#ffffff20]" to={"filterWorks"}>Filter Works</NavLink>
                <NavLink className="py-2 w-[120px] flex justify-center hover:bg-[#ffffff20]" to={"works"}>Works</NavLink>
            </nav>
        </div>
    )
}