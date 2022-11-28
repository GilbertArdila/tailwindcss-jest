import React from 'react'

const Banner = ({ setToggle}) => {
  const handleClick = () => {
    setToggle(false)
  }
  return (
    <main >
        <div
        className='h-56 md:h-80 bg-cover bg-no-repeat bg-center' 
        style={{backgroundImage:' url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80)'}}
        onClick={handleClick}
        ></div>
      
    </main>
  )
}

export  {Banner}