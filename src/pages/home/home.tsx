import { Header } from "@/components/header/header"
import { Img } from '../../components/section_img/section_img'
import { HoverEffect } from '../../components/ui/card-hover-effect'
import style from '../../styles/home.module.css'
import { FaWhatsapp, FaRegBuilding, FaHammer   } from "react-icons/fa";
import { MdWorkOutline, MdPeopleAlt } from "react-icons/md";




export function DesingHome() {
    const WHATSAPP_NUMBER = "5491133169842"; // sin + ni espacios
    const message = encodeURIComponent("Hola, quiero hacer una consulta legal");

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

    return (
        <> 
        <section className="relative"> 
            <Img />
            <div className="absolute inset-x-4 top-4 z-[60] md:inset-x-8 md:top-6"> 
            <Header />
            </div>
             </section>
        
        <section>
             <div className="max-w-5xl mx-auto px-8">
             <HoverEffect items={projects} />
             </div>
        </section>

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
        <section className={style.section}> 
            <h1>
                Guido Palacin
            </h1>
            <h2> 
                Especialistas en Defensa Penal
            </h2>
            <p> 
                Bajo la dirección del Dr. Leopoldo Murúa, abogado especialista en derecho penal, contando con un equipo interdisciplinario de profesionales comprometidos con la defensa penal activa, estratégica y personalizada.
            </p>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className={style.desing_wpp}>    
            WhatsApp 
            <FaWhatsapp /></a>
            </section>
        </>
    )
}


