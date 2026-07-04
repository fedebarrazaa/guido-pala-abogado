import { Header } from "@/components/header/header"
import { Img } from '../../components/section_img/section_img'
import { HoverEffect } from '../../components/ui/card-hover-effect'
import { InfiniteMovingCards } from '../../components/ui/infinite-moving-cards'
import { WobbleCard } from '../../components/ui/wobble-card'
import style from '../../styles/home.module.css'
import { FaWhatsapp, FaRegBuilding, FaHammer   } from "react-icons/fa";
import { MdWorkOutline, MdPeopleAlt, MdOutlinePeopleAlt } from "react-icons/md";
import { TbCash } from "react-icons/tb";

import { FiMessageCircle } from "react-icons/fi";


import { BsCheckLg } from "react-icons/bs";




export function DesingHome() {
   const WHATSAPP_NUMBER = "5491133169842"; // sin + ni espacios
   const message = encodeURIComponent("Hola, quiero hacer una consulta legal");

    const projects = [
        { 
            title: "6+",
            description: "Años defendiendo clientes.",
        },
        { 
            title: "CPACF",
            description: "Matrícula profesional vigente.",
        },
        { 
            title: "200+",
            description: "Casos penales patrocinados.",
        }
    ]

    const data = [
        {id:1, icon: <MdOutlinePeopleAlt fontSize='40px' color="#D2B48C"/>, text:'Atención personalizada'},
        {id:2, icon: <FiMessageCircle fontSize='40px' color="#D2B48C"/>, text:'Seguimiento del caso'},
        {id:2, icon: <TbCash fontSize='40px' color="#D2B48C"/>, text:'Honorarios claros'}
    ]

    const testimonials = [ 
        {
            quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
        },
        {
            quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Federico Barraza",
    title: "asd",
        },
        {
            quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Federico Barraza",
    title: "asd",
        },
        {
            quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Federico Barraza",
    title: "asd",
        },
        {
            quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Federico Barraza",
    title: "asd",
        }
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

        {/*AÑOS, MATRICULA*/} {/*TEXTO MINI PRESENTACION*/}
        <section>
             <div className="max-w-5xl mx-auto px-8">
                 <div className={style.section}> 
            <p> 
                Bajo la dirección del Dr. Leopoldo Murúa, abogado especialista en derecho penal, contando con un equipo interdisciplinario de profesionales comprometidos con la defensa penal activa, estratégica y personalizada.
                Bajo la dirección del Dr. Leopoldo Murúa, abogado especialista en derecho penal, contando con un equipo interdisciplinario de profesionales comprometidos con la defensa penal activa, estratégica y personalizada.
                Bajo la dirección del Dr. Leopoldo Murúa, abogado especialista en derecho penal, contando con un equipo interdisciplinario de profesionales comprometidos con la defensa penal activa, estratégica y personalizada.
            </p>
            </div>
             <HoverEffect items={projects} />
             </div>
        </section>

        {/*QUE TRABAJA*/}

        <section className={style.section_areas}> 
            <h1> 
                Areas de practica
            </h1>
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-gray-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Derecho Penal
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Representación en delitos de narcotráfico, delitos económicos, delitos contra la propiedad, 
            delitos sexuales y demás ilícitos previstos en el Código Penal.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gray-800 ">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Jurisdicción
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Intervención en C.A.B.A., Provincia de Buenos Aires, Santa Cruz y Rio Negro (matricula provincial). Delitos federales en todo el país.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gray-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Representación
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Intervención en todas las etapas del proceso penal: investigación e instrucción, juicio oral, 
            etapas recursivas, tribunales superiores provinciales y Corte Suprema de Justicia.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
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

         {/* TESTIMONIOS*/}
         <section> 
            <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
         </section>
        
        {/*NECESITAS*/}
        <section className={style.section_contact}> 
          <article className={style.article_contact}>
            <h1>¿Necesitas asesoramiento personal?</h1>
            <p>Estoy para ayudarte. Consulta tu caso sin compromiso</p>
          </article>
          <button className="w-54 px-4 py-2 backdrop-blur-sm border bg-[#C8A977]/10 border-[#C8A977]/20 text-white  text-center rounded-full relative mt-4">
          <span>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
            >
            Solicitar consulta 
            <FaWhatsapp fontSize='20px'/>
            </a>
            </span>
        </button>
        </section>

        
        </>
    )
}


