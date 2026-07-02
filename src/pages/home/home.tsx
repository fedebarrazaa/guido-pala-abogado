import { Header } from "@/components/header/header"
import { Img } from '../../components/section_img/section_img'
import { HoverEffect } from '../../components/ui/card-hover-effect'
import style from '../../styles/home.module.css'
import { FaWhatsapp, FaRegBuilding, FaHammer   } from "react-icons/fa";
import { MdWorkOutline, MdPeopleAlt } from "react-icons/md";
import { BsCheckLg } from "react-icons/bs";




export function DesingHome() {
   // const WHATSAPP_NUMBER = "5491133169842"; // sin + ni espacios
   // const message = encodeURIComponent("Hola, quiero hacer una consulta legal");

    const projects = [
        { 
            title: "6+",
            description: "Años de experiencia.",
        },
        { 
            title: "CPACF",
            description: "Matrícula colegiada.",
        },
        { 
            title: "200+",
            description: "Casos resueltos.",
        }
    ]

    const areas = [
        {id:1, icon: <MdWorkOutline fontSize='50px' /> , rubro: 'Laboral'},
        {id:1, icon: <MdPeopleAlt fontSize='50px'/>, rubro: 'Familia'},
        {id:1, icon: <FaRegBuilding fontSize='50px'/>, rubro: 'Comercial'},
        {id:1, icon: <FaHammer fontSize='50px'/>, rubro: 'Civil'}
    ]

    const data = [
        {id:1, icon: <BsCheckLg fontSize='20px' />, text:'Atención personalizada' },
        {id:2, icon: <BsCheckLg fontSize='20px' />, text:'Seguimiento del caso' },
        {id:2, icon: <BsCheckLg fontSize='20px' />, text:'Honorarios claros' }
    ]

    return (
        <> 
        {/*HEADER + IMAGEN + BOTON WPP*/}

        <section className="relative"> 
         <Img />
          <div className="absolute inset-x-4 top-4 z-[60] md:inset-x-8 md:top-3"> 
           <Header />
            </div>
             </section>

        {/*TEXTO MINI PRESENTACION*/}
        


        {/*AÑOS, MATRICULA*/}

        <section className="m-20">
            <section className={style.section}> 
            <p> 
                Bajo la dirección del Dr. Leopoldo Murúa, abogado especialista en derecho penal, contando con un equipo interdisciplinario de profesionales comprometidos con la defensa penal activa, estratégica y personalizada.
                Bajo la dirección del Dr. Leopoldo Murúa, abogado especialista en derecho penal, contando con un equipo interdisciplinario de profesionales comprometidos con la defensa penal activa, estratégica y personalizada.
                Bajo la dirección del Dr. Leopoldo Murúa, abogado especialista en derecho penal, contando con un equipo interdisciplinario de profesionales comprometidos con la defensa penal activa, estratégica y personalizada.
            </p>
            </section>
             <div className="max-w-5xl mx-auto px-8">
             <HoverEffect items={projects} />
             </div>

        </section>

        {/*QUE TRABAJA*/}

        <section className={style.section_areas}> 
            <h1> 
                Areas de practica
            </h1>
            <ul className={style.ul}>
                {areas.map((usuario)=>(
                   <li>{usuario.icon}{usuario.rubro}</li> 
                ))} 
                
            </ul>
        </section>

        {/*PORQUE ELEGIRME*/}

        <section className={style.section_areas}> 
            <h1> 
                ¿Por qué elegirme?
            </h1>
            <ul className={style.ul}>
                {data.map((usuario)=>(
                   <li>{usuario.icon}{usuario.text}</li> 
                ))} 
                
            </ul>
        </section>
        

        
        </>
    )
}


