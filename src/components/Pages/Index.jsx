import React from 'react'
import { useNavigate } from 'react-router-dom';
import CardsPresentation from '../cards_presentation/CardsPresentation';
import InputBtn from '../InputBtn/InputBtn';
import ProjectsPreview from '../projectsPreview/ProjectsPreview';
import SocialMediaBox from '../SocialMediaBox/SocialMediaBox';
import VideoHeader from '../video_header/VideoHeader';
import {imgProjects} from "../../img/imgProjects";
import {icons} from "../../img/icons";
import ContactForm from '../contactForm/ContactForm';

const Index = () => {
  const navigate = useNavigate();
  const imgProjectsArray = Object.values(imgProjects);
  const sizeBtn = window.matchMedia('(min-width: 768px)').matches


  return (
    <div className="App bg-brandWhite">
      
    <header className="flex flex-col w-full items-center min-h-450 h-screen relative justify-end pb-8 sm:justify-between md:max-h-[650px] lg:max-h-[700px]">
      
      <div className="hidden sm:flex sm:flex-row sm:w-4/5 sm:justify-between sm:items-center sm:mt-5 lg:max-w-[1100px]">
        <h2 className='text-TitleCards font-semibold cursor-pointer' onClick={()=> {navigate('/proyectos')}}>NicoVarela<span className='font-bold text-brandPink'>.UY</span></h2>
        <SocialMediaBox social={true} color={true}/>
      </div>

      <div className='overflow-hidden h-full w-full relative'>
        <VideoHeader className='absolute top-0 bottom-0 left-0 right-0 m-auto max-w-xs'/>
      </div>


      <div className="flex flex-col text-center gap-4 sm:hidden">
        <p className="text-Links">Diseñador Digital -<a href='https://www.instagram.com/camaratbwa/' className='cursor-pointer font-bold text-brandPink' target="_blank" rel="noreferrer"> CamaraTBWA</a></p>
        <SocialMediaBox social={true} color={true}/>
      </div>

      <p className="text-Links hidden sm:flex font-medium">Diseñador Digital - <a href='https://www.instagram.com/camaratbwa/' className='text-brandPink font-bold cursor-pointer' target="_blank" rel="noreferrer"> CamaraTBWA</a></p>

      <img src={icons.utilities.arrowDown.color} alt="ArrowBack" className='h-10 w-auto mt-10'/>
    </header>


    <section className="flex flex-col drop-shadow-md w-full overflow-hidden">
      <div className="text-end bg-brandPink text-brandWhite px-8 py-6 pb-20 z-0 sm:w-11/12 md:max-w-[1600px] sm:-ml-[-100px] sm:pr-[80px] lg:-ml-[-350px] lg:pr-[450px]">
        <p className="text-content font-light">Ceci n'est pas une présentation.</p>
        <h3 className="text-SubTitles leading-8 w-full fontb">Esto no es una presentación.</h3>
      </div>

      <div className="flex flex-col w-4/5 items-center m-auto p-8 gap-6 bg-white border-b-4 border-brandBlack -mt-12 z-10 sm:flex-row sm:justify-between sm:p-10 sm:w-11/12 md:max-w-800 lg:max-w-[1100px] lg:px-24 lg:py-14">
        <CardsPresentation option='developer'/>
        <CardsPresentation option='uxUi'/>
        <CardsPresentation option='branding'/>
        <CardsPresentation option='other'/>
      </div>

      <div className="w-full z-0 h-[80px] -mt-8 bg-brandPink sm:w-5/6 max-w-[900px]">
      </div>
    </section>
  

    <section className="flex flex-col items-center py-6 w-10/12 m-auto pb-10 lg:max-w-[1100px]">
      <h2 className="w-full text-start text-SubTitles text-brandPink font-bold">: )</h2>

      <div className="flex flex-col items-center gap-5 py-3 pb-5 w-full sm:flex-row">
        {imgProjectsArray.slice(0, 3).map((x, key) => (
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

      {sizeBtn ? <InputBtn navigate='proyectos' title='Ver Más' className='w-full' size={false}/>: <InputBtn navigate='proyectos' title='Ver Más' className='w-full' size={true}/>}

    </section>

{/*     <section className='bg-brandBlack text-brandWhite py-10 pb-5 flex flex-col gap-5'>
        <h2 className='max-w-[1100px] w-10/12 m-auto text-start text-TitleCards font-medium'>Vamo<span className='text-brandPink'>'</span> a trabajar <span className='text-brandPink'>?</span></h2> 
        <ContactForm/>
    </section> */}

    <footer className='flex flex-row bg-brandBlack w-full gap-5 py-8 items-center justify-center'>
      <SocialMediaBox social={true}/>
    </footer>
  </div>
  )
}

export default Index