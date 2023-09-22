import React from 'react'

import ProjectsPreview from '../projectsPreview/ProjectsPreview';
import SocialMediaBox from '../SocialMediaBox/SocialMediaBox';
import NavProjects from '../Nav/NavProjects';
import Filters from '../Filters/Filters';
import {imgProjects} from "../../img/imgProjects";
const Projects = () => {


  const imgProjectsArray = Object.values(imgProjects);

  return (
    <div>
        <NavProjects/>

        <section>
          <Filters size={'2.5rem'}/>
        </section>
        
        <section className='pb-10'>
            <div className='grid grid-cols-1 gap-5 m-auto w-5/6 justify-center md:w-10/12 md:grid-cols-2 lg:w-2/4 lg:grid-cols-3 '>
            {imgProjectsArray.map((x, key) => (
              <ProjectsPreview
              key={key}
              id={x.id}
              title={x.content.title}
              description={x.content.description}
              images={x.img}
              videos={x.video}
              iconDesign={x.technology.design}
              iconDeveloper={x.technology.develop}
              />
            ))}

                
            </div>
        </section>
        
        <footer className='flex flex-row bg-brandBlack w-full gap-5 py-8 items-center justify-center'>
          <SocialMediaBox social={true}/>
        </footer>
    </div>
  )
}

export default Projects