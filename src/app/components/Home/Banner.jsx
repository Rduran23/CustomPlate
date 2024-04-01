import React from 'react'

function Banner() {
  return (
    <>

    <div className='px-4 flex flex-col'>
        <h2 className='text-3xl font-bold'>Matrículas personalizadas</h2>
        <ul className='py-4 flex flex-col gap-2 text-gray-800 text-xl list-disc px-6'>
            <li>Calidad profesional</li>
            <li>Matrículas Japonesas</li>
            <li>Matrículas Americanas</li>
            <li>Matrículas de Redes sociales</li>
            <li>Envíos desde España</li>
        </ul>
    </div>
    
    </>
  )
}

export default Banner