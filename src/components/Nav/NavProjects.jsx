import React from 'react'
import { useNavigate } from "react-router-dom";
import { icons } from "../../img/icons";

const NavProjects = () => {
    let navigate = useNavigate()

  return (
    <nav className='flex flex-row relative m-auto p-5  w-12/12 sm:w-11/12 lg:w-7/12 '>
        <img src={icons.utilities.arrowBack.color} onClick={() => {navigate(-1)}} alt="ArrowBack" className='h-10 w-auto self-start'/>
        <h2 className='text-SubTitles font-bold absolute w-fit h-fit top-0 bottom-0 left-0 right-0 m-auto cursor-pointer' onClick={()=> {navigate('/inicio')}}>Nicolas Varela<span className='text-brandPink font-bold'>.</span></h2>
    </nav>
  )
}

export default NavProjects