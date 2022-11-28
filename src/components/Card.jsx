import React from 'react'

const Card = ({nombre,descripcion,precio,calificacion,reseñas,imagen, width,heigth,setToggle}) => {

  const handleClick = () => {
    setToggle(false)
  };
 

  return (
    <div className={`w-[${width}] h-[${heigth}] mx-auto mt-4 md:w-1/2 md:flex `}
     onClick={handleClick}
    >
        <img className='w-[90%] mx-auto mt-2 rounded-lg md:rounded-none md:w-48 md:rounded-l-md md:rounded-bl-md ' src={imagen} alt={nombre}/>

        <div className={`relative w-[90%] h-auto mx-auto -mt-2 p-2 bg-white rounded-lg shadow-lg text-gray-900  md:mt-2 md:rounded-none md:rounded-r-md md:rounded-br-md`}>
        <p 
        title='nombreProducto'
        className='text-xl uppercase tracking-tight font-semibold'>{nombre}</p>
        <p 
        title='descripcionProducto'
        className='text-gray-700 leading-snug'>{descripcion}</p>
        <p
        title='nombreProducto'
        className='text-sm font-semibold tex-gray-700 mt-2'>{'$'+precio}</p>
        <p
        title='calificacionProducto'
        className='text-yellow-700 text-xs mt-2'>&#x2605;&#x2605;&#x2605;&#x2605;{calificacion}<span 
        title='reseñaProducto'
        className='text-gray-700'>/{reseñas}</span></p>
        </div>
    </div>
  )
}
export const mustBeNumber = (price,width,heigth) => {
  if(typeof(price)==='number' && typeof(width)==='number' && typeof(heigth)==='number')
  return true
}
export  {Card}