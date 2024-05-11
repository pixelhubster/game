import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-orange-400 fixed w-full max-lg:w-[98.4vw] object-fill p-3 max-lg:rounded-md mx-auto flex items-center justify-between lg:px-40 z-[1] shadow-md h-[3.5rem]">
            <div>Game</div>
            <a href='/news/signin' className='hover:underline'>Signin</a>
        </nav>
    )
}

export default Navbar