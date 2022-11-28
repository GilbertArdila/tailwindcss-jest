import React from 'react'

const Form = ({setToggle}) => {

    const handleClick = () => {
        setToggle(false)
      };

    return (
        <form className='p-2 flex flex-col'  onClick={handleClick}>
            <label
                className='w-full md:w-[80%] md:mx-auto'
                htmlFor="nombre">Nombre</label>
            <input className='input focus:outline-none focus:shadow-outline'
                type="text"
                id="nombre"
                placeholder='Nombre'
                 />

            <label
                className='w-full md:w-[80%] md:mx-auto'

                htmlFor="mail">Email</label>
            <input className='input focus:outline-none focus:shadow-outline'
                type="text"
                id="mail"
                placeholder='Email'
                 />
            <label 
            className='w-full md:w-[80%] md:mx-auto'htmlFor="comentarios">comentarios</label>
            <textarea
                className='input focus:outline-none focus:shadow-outline'
                cols="30" rows="10" 
                id='comentarios'/>

            <button className='btn btn-primary'  >Enviar</button>
        </form>
    )
}

export { Form }