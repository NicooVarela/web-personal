import React from 'react'
import { useNavigate } from "react-router-dom";

const InputBtn = (props) => {

  let navigate = useNavigate()

  const conditionalSize = props.size ? { width: "100%" } : { width: "fit-content" };
  return (
    <input type="button"
      onClick={() => {navigate(`/${props.navigate}`)}}
      value={props.title}
      style={conditionalSize}
      className="text-btn cursor-pointer text-brandBlack pr-16 pl-2 border-2 border-brandBlack tracking-widest font-medium border-b-4 border-b-brandPink sm:min-w-[300px] lg:min-w-[400px]"/>
  )
}

export default InputBtn