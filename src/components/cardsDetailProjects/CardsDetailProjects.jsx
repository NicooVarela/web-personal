import React from 'react'
import { icons } from '../../img/icons'

const CardsDetailProjects = (props) => {
  
  const info = props.data
  const colors = info.technology.design.Colors

  if (props.color === true) {
    return (
      <div className='flex flex-row items-center gap-5 mx-5 bg-brandWhite py-2 px-5 border-b-brandPink border-b-[6px] shadow-sm w-full justify-center sm:w-fit sm:min-w-[200px]'>
        <img src={icons.design.paletteColor.color} alt='a' className='h-12'/>
        <div className='flex flex-row gap-5'>
        {colors.map((x, key) => (
          <span key={key} className={`w-5 h-5 rounded-full shadow-sm`} style={{ backgroundColor: `${x}` }}></span>    
        ))}
        </div>
    </div>
    )
  } else if (props.typo === true){
    return (
      <div className='flex flex-row items-center gap-5 mx-5 bg-brandWhite py-2 px-5 border-b-brandPink border-b-[6px] shadow-sm w-full justify-center sm:w-fit sm:min-w-[200px]'>
          <img src={icons.design.typo.color} alt='a' className='h-12'/>
          <p className='font-medium text-TitleCards'>{info.technology.design.Typo}</p>
      </div>
    )
  } else if (props.dev === true) {
    return(
      <div className='flex flex-row items-center gap-5 mx-5 bg-brandWhite py-2 px-5 border-b-brandBlack border-b-[6px] shadow-sm w-full justify-center sm:w-fit sm:min-w-[200px]'>
        <img src={props.tech.icon.color} alt='a' className='h-12'/>
        <p className='font-medium text-TitleCards'>{props.tech.name}</p>
      </div>
    )


  }

}

export default CardsDetailProjects