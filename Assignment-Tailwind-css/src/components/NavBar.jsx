import React from 'react'

function NavBar() {
    return (
        <div className='bg-red-400 h-20 flex justify-between items-center px-5'>
            <div className='flex items-center'>
                <div className="logo text-white text-3xl font-semibold m-5">Kalvium</div>
                <div className="anchor text-slate-200 font-semibold">
                    <a href="" className='mx-2.5'>About us</a>
                    <a href="" className='mx-2.5'>Contact</a>
                    <a href="" className='mx-2.5'>Courses</a>
                </div>
            </div>
            <div>
                <button className='w-24 border-2 rounded px-3.5 py-1.5 text-white border-white'>Login</button>
            </div>
        </div>
    )
}

export default NavBar
