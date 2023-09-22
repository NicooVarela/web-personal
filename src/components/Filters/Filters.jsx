import React from 'react'
import { icons } from "../../img/icons";

const Filters = (props) => {
  const Size = {
    height: `${props.size}`
  }
  return (
    <div className='flex flex-row w-5/6 justify-between m-auto py-10 max-w-[400px]'>
        <img src={icons.filter.developer.color} alt='developer' style={Size}/>
        <img src={icons.filter.branding.color} alt='branding' style={Size}/>
        <img src={icons.filter.uxUi.color} alt='uxUi' style={Size}/>
        <img src={icons.filter.all.color} alt='all' style={Size}/>
    </div>
  )
}

export default Filters