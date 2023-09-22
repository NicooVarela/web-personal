import React from 'react'
import videoWeb from '../../video/video2.mp4';

const VideoHeader = () => {
  return (
    <picture>
        <video src={videoWeb} type="video/mp4" preload="auto" autoPlay={true} loop={false} muted={true} controls={false} className='h-full m-auto'/>
    </picture>
    
  )
}

export default VideoHeader