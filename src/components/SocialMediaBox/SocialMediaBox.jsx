import React from 'react'
import { icons } from "../../img/icons";

const SocialMediaBox = (props) => {
  
  const conditionSocial = props.social ? { display: "none" } : { display: "block" };
  return (
    <div className='flex flex-row gap-5'>
        <a href="https://www.instagram.com/nicovarela.uy" target="_blank" rel="noreferrer"><img src={props.color === true ? icons.social.instagram.color : icons.social.instagram.white} alt="Instagram" className='h-10 w-auto'/></a>
        <a href="https://www.behance.net/NicoVarelaUY" target="_blank" rel="noreferrer"><img src={props.color === true ? icons.social.behance.color : icons.social.behance.white} alt="Behance" className='h-10 w-auto'/></a>
        <a href="https://www.linkedin.com/in/nicovarela/" target="_blank" rel="noreferrer"><img src={props.color === true ? icons.social.linkedin.color : icons.social.linkedin.white} alt="Linkedin" className='h-10 w-auto'/></a>
        <a href="https://github.com/NicooVarela" target="_blank" rel="noreferrer"><img src={props.color === true ? icons.social.gitHub.color : icons.social.gitHub.white} alt="GitHub" className='h-10 w-auto'/></a> 
        <img src={props.color === true ? icons.utilities.share.color : icons.utilities.share.white} alt="Settings" className='h-10 w-auto' style={conditionSocial} />
    </div>
  )
}

export default SocialMediaBox