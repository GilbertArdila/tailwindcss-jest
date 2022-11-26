import React from 'react'

const Header = () => {
  return (
    <nav className=' flex justify-between items-center bg-secondary text-white px-4 py-2 xl:h-20'>
        <div className='xl:text-3xl'>Fast food 🍔</div>
        <div className='text-2xl xl:text-5xl'>&equiv;</div>
    </nav>
  )
}

export  {Header}