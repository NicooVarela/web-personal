import React from 'react'

import Slider from '../slider/Slider';
/* import InputBtn from '../InputBtn/InputBtn'; */
import SocialMediaBox from '../SocialMediaBox/SocialMediaBox';
import { useLocation } from "react-router-dom";
import {imgProjects} from "../../img/imgProjects";

import NavProjects from '../Nav/NavProjects';
import CardsDetailProjects from '../cardsDetailProjects/CardsDetailProjects';

const ProjectExpanded = () => {

    const imgProjectsArray = Object.values(imgProjects);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

    const data = imgProjectsArray.find(item => item.id === parseInt(id));
    const dev = data.technology.develop

    const categoryTitle = data.content.category
  return (
    <div className='flex flex-col min-h-[100vh] w-full overflow-hidden'>
        <div>
            <NavProjects/>
        </div>

        <Slider images={data.img} video={data.video}/>

        <div className='flex flex-col items-start w-full m-auto gap-5 sm:gap-0 md:justify-between lg:flex-row lg:gap-10 lg:w-8/12 lg:max-w-[1200px] lg:items-center lg:mt-6'>

            <div className='flex flex-col gap-3 my-10 w-6/12 m-auto '>
                <div className='flex flex-row w-full items-center gap-4'>
                    <h2 className='text-TitleCards font-medium h-fit'>{data.content.title}</h2>
                    {categoryTitle.map((x) => (
                        <img src={x.color} alt='a' className='h-10'/>
                    ))}
                    
                </div>
                <p>{data.content.description}</p>
            </div>

            {
                data.technology.design.Typo === '' && data.technology.design.Colors.length === 0 ?
                console.log("Si"):

                <div className='bg-brandBlack w-full p-6 lg:w-fit'>
                    <div className='flex flex-row flex-wrap gap-4 justify-center lg:w-fit lg:justify-start'>

                        {data.technology.design.Typo === '' ? console.log("Si"):
                        <CardsDetailProjects data={data} typo={true}/>}

                        {data.technology.design.Colors.length === 0 ? console.log("Si"):
                        <CardsDetailProjects data={data} color={true}/>
                        }

                    </div>
                </div>
            }
        </div>

        <div className='bg-brandPink flex flex-row flex-wrap w-full m-auto p-5 justify-center gap-4 lg:mb-10'>

            {dev.map((x, key) => (
                <CardsDetailProjects key={key} data={data} dev={true} tech={x}/>
            ))}
            

        </div>


{/*         <div className='flex flex-col text-center w-10/12 m-auto mt-5 gap-2'>
            <InputBtn title='Ver Prototipado' size={true}/>
        </div> */}

        
        <footer className='flex flex-row bg-brandBlack w-full gap-5 py-8 items-center justify-center'>
            <SocialMediaBox social={true} type={'white'}/>
        </footer>


    </div>


  )
}

export default ProjectExpanded