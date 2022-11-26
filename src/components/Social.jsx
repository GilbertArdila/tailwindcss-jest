import React from 'react'

const Social = ({src,alt}) => {
  return (
    <>
    <span className='flex items-center justify-center w-12 h-12 m-2  border-primary border-2 rounded-lg hover:scale-75 cursor-pointer transition ease-out duration-200'><img
    className='rounded w-8 h-8 '
    src={src} alt={alt} /></span>
    </>
  )
}

export  {Social}