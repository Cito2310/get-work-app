import React from 'react'
import { NavLink } from 'react-router-dom'

export const TopBar = () => {
    return (
        <nav className='flex gap-3'>
            <NavLink to={"selectData"}>Select Data</NavLink>
            <NavLink to={"filterWorks"}>Filter Works</NavLink>
            <NavLink to={"works"}>Works</NavLink>
        </nav>
    )
}