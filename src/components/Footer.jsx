import React from 'react'
import { Social } from './Social'

const Footer = ({setToggle}) => {

  const handleClick = () => {
    setToggle(false)
  };

  return (
    <footer className='flex justify-between items-center w-full h-[130px] mt-3 bg-secondary text-white xl:pl-5'
    onClick={handleClick}
    >
      <div className='flex w-1/2 sm:w-1/3'>
        <Social src={"https://cdn3.iconfinder.com/data/icons/social-media-2478/24/twiter-64.png"}
        alt={"Twitter"}
        />
        <Social src={"https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-64.png"}
        alt={"instagram"}
        />
         <Social src={"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-youtube-outline-64.png"}
        alt={"youtube"}
        />
        
      </div>
      <ul title='contact-list' className='flex flex-col items-center  capitalize w-1/2 h-auto list-disc text-sm  sm:w-2/3 sm:flex-row sm:list-none xl:justify-center'>
        <li className='sm:mx-2 hover:text-primary hover:scale-125  cursor-pointer transition ease-out duration-200'>Soporte</li>
        <li  className='sm:mx-2 hover:text-primary hover:scale-110  cursor-pointer transition ease-out duration-200'>Acerca de nosotros</li>
        <li  className='sm:mx-2 hover:text-primary hover:scale-110 cursor-pointer transition ease-out duration-200'>Registro</li>
        <li  className='sm:mx-2 hover:text-primary hover:scale-110 cursor-pointer transition ease-out duration-200'>Aviso de privacidad</li>
      </ul>
    </footer>
  )
}

export  {Footer}