import React from 'react'

const Navbar = () => {
    return (
        <div className='p-4 flex justify-between items-center border-b border-gray-300'>
            <img src="/assets/logo.png" alt="logo" className='w-44 h-10'/>
            <div className='rounded-lg py-2 px-3 flex items-center gap-2 border border-gray-400'>
                <img src="/assets/nix.png" alt="" className='rounded-full w-8 h-8'/>
                <p className='hidden sm:block font-bold'>Nix</p>
            </div>
        </div>
    )
}

export default Navbar
