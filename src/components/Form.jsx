import React from 'react'

const Form = () => {
    return (
        <form className='p-2 flex flex-col'>
            <label
                className='w-full md:w-[80%] md:mx-auto'
                htmlFor="nombre">Nombre</label>
            <input className='w-full md:w-[80%] md:mx-auto my-2 text-gray-800 placeholder-secondary leading-snug border-2 border-blue-300 rounded-md bg-gray-300 p-2 hover:bg-white focus:outline-none focus:shadow-outline'
                type="text"
                id="nombre"
                placeholder='Nombre' />

            <label
                className='w-full md:w-[80%] md:mx-auto'

                htmlFor="mail">Email</label>
            <input className='w-full md:w-[80%] md:mx-auto my-2 text-gray-800 placeholder-secondary leading-snug border-2 border-blue-300 rounded-md bg-gray-300 hover:bg-white focus:outline-none focus:shadow-outline'
                type="text"
                id="mail"
                placeholder='Email' />

            <textarea
                className='w-full md:w-[80%] md:mx-auto my-2 text-gray-800 placeholder-secondary leading-snug border-2 border-blue-300 rounded-md bg-gray-300 hover:bg-white focus:outline-none focus:shadow-outline'
                name="comentarios" cols="30" rows="10" />

            <button className='w-20 md:w-36 block mx-auto border-2 border-blue-700 rounded-lg bg-blue-400
         text-blue-700 hover:bg-blue-700 hover:text-blue-400'  >Enviar</button>
        </form>
    )
}

export { Form }