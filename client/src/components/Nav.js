import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='bg-slate-900 text-white text-lg font-mono flex flex-row justify-between px-80 py-1.5 items-center
                        border-slate-500 border-b'>
            
            <h1 className='text-2xl'>Easy Event</h1>

            <ul className='flex flex-row gap-x-10'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/signup'>Sign Up</Link></li>
                <li><Link to='/login' >Login</Link></li>
            </ul>
            
        </nav>
    )
}

export default Nav