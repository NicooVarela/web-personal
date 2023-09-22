import React from 'react'
import InputBtn from '../InputBtn/InputBtn';

const Error404 = () => {
  return (
    <div className='bg-brandWhite h-screen w-screen overflow-hidden flex flex-col justify-center items-center text-center gap-10 md:gap-16'>
      <h2 className='text-TitleCards font-bold uppercase text-brandBlack sm:text-[3rem]'>Recorcholis <span className='text-brandPink font-bold'>404 .</span></h2>

      <div className=' w-11/12 text-brandBlack flex flex-col gap-1 text-content font-medium sm:w-10/12  sm:text-[1.3rem]'>
        <p >Seguramente tocaste algo que no tenias que tocar, ya que soy un <span className='text-brandPink'>excelente programador.</span> <br /> De todas formas lo voy a revisar <span className='text-brandPink font-bold'> . </span></p>
      </div>

      <InputBtn navigate='inicio' title='Volver al inicio' className='w-full' size={false}/>
    </div>
  )
}

export default Error404