import React from 'react';
import { Search } from './Search';
import { Filter } from './Filter';

const Header = ({ toggle, setToggle }) => {

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <nav className='fixed w-full flex flex-col z-10 '>
      <div className=' flex justify-between items-center bg-secondary text-white px-4 py-2 xl:h-20'>
        <div className='xl:text-3xl'>Fast food 🍔</div>
        <div
          className='text-2xl xl:text-5xl hover:cursor-pointer'
          onClick={ handleClick}
        >&equiv;</div>
      </div>
      {toggle ?
        <>
          <div className='flex justify-between items-center bg-secondary text-white px-4 py-2 xl:h-20'>
            <Search />

          </div>
          <Filter /> </> : null
      }


    </nav>
  )
}

export { Header }