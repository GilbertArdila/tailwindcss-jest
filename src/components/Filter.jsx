import React from 'react'

const Filter = () => {
  return (
    <section className='p-2 bg-secondary text-gray-400 sm:flex sm:items-center justify-between'>
    <div>Precio{' '}
        <span className='mx-1'>$</span>
        <span className='text-primary mx-1'>$$</span>
        <span className='mx-1'>$$$</span>
        <span className='mx-1'>$$$$</span>
    </div>
    <div>Calificación{' '}
        <span className='text-primary mx-px'>&#9733;</span>
        <span className='text-primary mx-px'>&#9733;</span>
        <span className='text-primary mx-px '>&#9733;</span>
        <span className='text-primary mx-px'>&#9733;</span>
        <span>&#10025;</span>
    </div>
    <button className='btn btn-secondary'>Filtrar</button>
    </section>
  )
}

export  {Filter}