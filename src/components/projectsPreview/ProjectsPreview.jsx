import React from 'react'
import { useNavigate } from "react-router-dom";

const ProjectsPreview = (props) => {
  let navigate = useNavigate()

  return (
    <div id={props.id} datatype-data={props} onClick={() => {navigate(`/detalle?id=${props.id}`)}} className='w-full aspect-square cursor-pointer'>
      <picture className='overflow-hidden'>
          <img src={props.images} alt="Instagram" className='h-full'/>
      </picture>
    </div>
  )
}

export default ProjectsPreview