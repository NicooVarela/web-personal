import React from 'react'
import { useState } from 'react';
import InputBtn from '../InputBtn/InputBtn';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: '',
      });
    
      const actionChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };
    
      const actionSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
      };

  return (
    <form onSubmit={actionSubmit} className='flex flex-col items-center w-10/12 m-auto md:gap-5 max-w-[1100px]'>
        <div className='w-full flex flex-col md:flex-row md:gap-10'>
            <div className='flex flex-col w-full gap-4 mb-4 md:mb-0'>
                <label className='flex flex-col w-full gap-2'>
                <p className='text-brandWhite font-normal'>Correo <span className='text-brandPink font-bold'>:</span></p>
                <input type="email" name="email" value={formData.email} onChange={actionChange} required className='text-brandBlack border-l-4 border-l-brandPink p-2'/>
                </label>

                <label className='flex flex-col w-full gap-2'>
                <p className='text-brandWhite font-normal'>Asunto <span className='text-brandPink font-bold'>:</span></p>
                <input type="text" name="subject" value={formData.subject} onChange={actionChange} required className='text-brandBlack border-l-4 border-l-brandPink p-2'/>
                </label>
            </div>

            <label className='flex flex-col w-full gap-2'>
            <p className='text-brandWhite font-normal'>Que hacemos <span className='text-brandPink font-bold'>?</span></p>
            <textarea name="message" value={formData.message} onChange={actionChange} required className='text-brandBlack border-l-4 border-l-brandPink p-2 min-h-[100px] md:h-full'/>
            </label>
        </div>


        <button type="submit"
        className="my-8 w-full text-btn cursor-pointer text-brandWhite pr-16 pl-2 border-2 border-brandPink tracking-widest font-medium border-b-4 border-b-brandPink">
        Enviar
        </button>
    </form>
  )
}

export default ContactForm