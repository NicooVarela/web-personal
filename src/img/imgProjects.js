import { icons } from "./icons";


const React = {name:'React', icon:icons.technology.React}
const JS = {name:'Javascript', icon:icons.technology.js}
const APIRest = {name:'API Rest', icon:icons.technology.APIrest}
const MongoDB = {name:'React', icon:icons.technology.mongoDB}
const PR = {name:'Premiere Pro', icon:icons.technology.PR}
const AE = {name:'After Efects', icon:icons.technology.AE}
const AI = {name:'Photoshop', icon:icons.technology.AI}
const PS = {name:'Illustrator', icon:icons.technology.PS}
const C3D = {name:'Cinema 3D', icon:icons.technology.Cinema}
const Figma = {name:'Figma', icon:icons.technology.Figma}
const Reaper = {name:'Reaper', icon:icons.technology.Reaper}


const imgProjects = {
/* =============================================================================================== */
        LaunchUY:{
                id:0,
                img:[
                        'https://i.ibb.co/1LX7bTF/portada.jpg',
                        'https://i.ibb.co/sR2873J/3.jpg',
                        'https://i.ibb.co/yPrMHdY/4.jpg',
                        'https://i.ibb.co/FsvGZ7H/2.jpg',
                ],
                video:[
                        
                ],
                content:{
                        title:"Launch.UY",
                        description:'LaunchUy es una tienda de desayunos con opciones que se adaptan a las necesidades de todos. Cuenta con opciones veganas, sin TACC, sin lactosa, entre otros. También se puede especificar alergias puntuales y el menú se modificará en base a ellas. ',
                        category:[icons.filter.uxUi],
                },
                technology:{
                        design:{
                                Typo:'Roboto',
                                Colors:['#BEE3DB', '#FFD6BA', '#F6F6F6 ']
                        },
                        develop:[Figma],
                },
                prototype: false

        },
/* =============================================================================================== */
        AppClima:{
                id:1,
                img:[
                        'https://i.ibb.co/nrCpHKf/portada.jpg',
                        'https://i.ibb.co/N97kpqJ/1.jpg',
                        'https://i.ibb.co/5v1KvHQ/3.jpg',
                        'https://i.ibb.co/VDXJ472/2.jpg'
                ],
                video:[
                        
                ],
                content:{
                        title:"App Clima",
                        description:'AppClima es una aplicación que muestra el estado del tiempo actual en ciudades de todo el mundo, como también el pronóstico del tiempo con hasta 20 días de extensión. También permite comparar el clima de 2 ciudades y aconsejar cuál es la mejor para ir a vacacionar en base a las preferencias del usuario.',
                        category:[icons.filter.developer, icons.filter.uxUi],
                },
                technology:{
                        design:{
                                Typo:'Nunito',
                                Colors:['#F1F1F1', '#2E99D6', '#565656']
                        },
                        develop:[APIRest, JS, Figma],
                },
                prototype: false
        },
/* =============================================================================================== */
        ESImbolo:{
                id:2,
                img:[
                        'https://i.ibb.co/Xzk6N85/Esi1.jpg',
                        'https://i.ibb.co/qxSfcDW/Esi2.jpg',
                ],
                video:[
                        'https://www.youtube-nocookie.com/embed/PCQljgE0uOE?controls=0',
                ],
                content:{
                        title:"ESImbolo",
                        description:'ESImbolo es un proyecto audiovisual que plantea argumentos para defender la necesidad de contar con una Educación Sexual Integral.',
                        category:[icons.filter.all],
                },
                technology:{
                        design:{
                                Typo:'Anton',
                                Colors:['#FF8702', '#2E2E2E']
                        },
                        develop:[PR, AE, AI, PS],
                },
                prototype: false
        },
/* =============================================================================================== */
        Ratatouille:{
                id:3,
                img:[
                        'https://i.ibb.co/7t5bJZC/Mesa-de-trabajo-13.jpg'
                ],
                video:[
                        'https://www.youtube.com/embed/a5SDBVsfiEk',
                ],
                content:{
                        title:"Fooley Art",
                        description:'El sonido de la escena de Ratatoullie fue eliminado para dar lugar a una reversión de todos los sonidos mediante Fooley.',
                        category:[icons.filter.all],
                },
                technology:{
                        design:{
                                Typo:'',
                                Colors:[]
                        },
                        develop:[Reaper, PR],
                },
                prototype: false
        },
/* =============================================================================================== */
        Aliena:{
                id:4,
                img:[
                        'https://i.ibb.co/RPmtwD6/Portada.png',
                        'https://i.ibb.co/HBP7MTF/1.png',
                        'https://i.ibb.co/b2jDSM9/2.png',
                ],
                video:[
                        
                ],
                content:{
                        title:"Aliena",
                        description:'El branding de identidad del estudio de diseño Aliena fue hecho pensando en un estudio uruguayo enfocado al diseño de identidad corporativa de marcas, pasando por lo web, digital y gráfico, y ayudar a crecer su identidad digital.',
                        category:[icons.filter.branding],
                },
                technology:{
                        design:{
                                Typo:'Poppins',
                                Colors:['##00A3C9', '#010101']
                        },
                        develop:[AI, PS, Figma],
                },
                prototype: false
        },
/* =============================================================================================== */
        MotionGraphics:{
                id:5,
                img:[
                        'https://i.ibb.co/1s1btrq/Mesa-de-trabajo-12.jpg'
                ],
                video:[
                        'https://www.youtube-nocookie.com/embed/AEY2zx_mNGU?controls=0',
                        'https://www.youtube-nocookie.com/embed/yw2d_2LSPR4?controls=0',
                ],
                content:{
                        title:"Motion Graphics",
                        description:'Videos Motion Graphics animados con diferentes tecnicas. Tanto rigging como camaras 3D',
                        category:[icons.filter.all],
                },
                technology:{
                        design:{
                                Typo:'',
                                Colors:[]
                        },
                        develop:[AE, AI],
                },
                prototype: false
        },
/* =============================================================================================== */
        TotemCerveza:{
                id:6,
                img:[
                        'https://i.ibb.co/6Js45SS/Mesa-de-trabajo-14.jpgg',
                ],
                video:[
                        '',
                ],
                content:{
                        title:"Interfaz Totem",
                        description:'TotemCerveza es una interfaz de venta de cervezas que permite a los clientes evaluar todas las opciones de cerveza que ofrece el local y pagar en el momento, sin necesidad de intermediarios.',
                        category:[icons.filter.uxUi],
                },
                technology:{
                        design:{
                                Typo:'Roboto',
                                Colors:['#1C8754', '#FFFFFF']
                        },
                        develop:[Figma],
                },
                prototype: false
        },
/* =============================================================================================== */
        Videos3D:{
                id:7,
                img:[
                        'https://i.ibb.co/WcqHww5/Mesa-de-trabajo-15.jpg',
                ],
                video:[
                        'https://www.youtube.com/embed/zVRsBymCkjs',
                        'https://www.youtube.com/embed/tMYnR7xyvIk',
                ],
                content:{
                        title:"Modelado 3D",
                        description:'Todo lo que se ve en el video fue modelado en su totalidad y animado en Cinema 4D',
                        category:[icons.filter.all],
                },
                technology:{
                        design:{
                                Typo:'',
                                Colors:[]
                        },
                        develop:[C3D],
                },
                prototype: false
        },
/* =============================================================================================== */
        Videoclip:{
                id:8,
                img:[
                        'https://i.ibb.co/Bz6Xq68/V1.jpg',
                        'https://i.ibb.co/mHdNMd5/V2.jpg',
                ],
                video:[
                        'https://www.youtube.com/embed/GS5IJxQzm_E?controls=0',
                ],
                content:{
                        title:"Videoclip",
                        description:'Este Videoclip es un proyecto que pretende evocar emociones a través de música, danza, cinematografía y entorno.',
                        category:[icons.filter.all],
                },
                technology:{
                        design:{
                                Typo:'',
                                Colors:[]
                        },
                        develop:[PR, AE, Reaper],
                },
                prototype: false
        },
/* =============================================================================================== */
}

export {imgProjects}