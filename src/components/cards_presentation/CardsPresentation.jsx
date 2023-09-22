import React from 'react'
import { icons } from "../../img/icons";


const CardsPresentation = (props) => {

    var option

    if (props.option === 'branding') {
        option = {
            icon: icons.filter.branding.color,
            title: 'Branding',
            subtitle: 'Identidad para marcas'
        }
    }
    else if (props.option === 'developer') {
        option = {
            icon: icons.filter.developer.color,
            title: 'Developer',
            subtitle: 'React, JS, MongoDB'
        }
    }
    else if (props.option === 'uxUi') {
        option = {
            icon: icons.filter.uxUi.color,
            title: 'UX/UI',
            subtitle: 'Prototipado, Research'
        }
    }
    else if (props.option === 'other') {
        option = {
            icon: icons.filter.all.color,
            title: 'Multimedia',
            subtitle: 'Animacion, edicion'
        }
    }


    return (
        <div className="flex flex-col text-center w-fit items-center gap-2">
            <img src={option.icon} alt="Settings" className='h-10 w-auto'/>
            <div className='flex flex-col gap-0'>
                <h4 className="text-TitleCards h-fit">{option.title} <span className=' text-brandPink h-fit'>.</span></h4>
                <p className=" hidden max-w-[130px] min-h-[30px] hover:whitespace-normal text-content h-fit leading-4 font-light whitespace-nowrap overflow-hidden truncate">{option.subtitle}</p>
            </div>
        </div>
        )
    }

export default CardsPresentation