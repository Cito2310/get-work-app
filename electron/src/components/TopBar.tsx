import { NavLink } from 'react-router-dom'
import { useSearch } from '../hooks';

export const TopBar = () => {
    const { register } = useSearch();    

    return (
        <div className='px-6 bg-main font-Montserrat z-50 relative flex justify-between'>
            <nav className='flex gap-3'>
                <NavLink className="py-2 w-[120px] flex justify-center hover:bg-[#ffffff20]" to={"selectData"}>Select Data</NavLink>
                <NavLink className="py-2 w-[120px] flex justify-center hover:bg-[#ffffff20]" to={"filterWorks"}>Filter Works</NavLink>
                <NavLink className="py-2 w-[120px] flex justify-center hover:bg-[#ffffff20]" to={"works"}>Works</NavLink>
            </nav>

            <div className='m-auto mx-3'>
                <input className='w-[300px] rounded-md p-0.5 px-2 focus' type='text' placeholder='Buscar' {...register("search")} />
            </div>
        </div>
    )
}