import { Header } from "@/components/header/header"
import { Img } from '../../components/section_img/section_img'
import { HoverEffect } from '../../components/ui/card-hover-effect'
import { InfiniteMovingCards } from '../../components/ui/infinite-moving-cards'
import { DesingArea } from '../../components/areas/areas'
import style from '../../styles/home.module.css'

import { FaWhatsapp } from "react-icons/fa";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { TbCash } from "react-icons/tb";
import { FiMessageCircle } from "react-icons/fi";

import { Link } from "react-router-dom"




export function DesingHome() {
   const WHATSAPP_NUMBER = "5491133169842"; 
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
    name: "-Charles Dickens",
    title: "A Tale of Two Cities",
        },
        {
            quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "-Federico Barraza",
    title: "asd",
        },
        {
            quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "-Federico Barraza",
    title: "asd",
        },
        {
            quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "-Federico Barraza",
    title: "asd",
        },
        {
            quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "-Federico Barraza",
    title: "asd",
        }
    ]

    const paginas = [
      {id:1, nombre: 'Inicio'},
      {id:2, nombre: 'Sobre mi'},
      {id:3, nombre: 'Areas'},
      {id:4, nombre: 'Contacto'},
    ]

    const redes = [
      {id:1, nombre: 'Linkedin'},
      {id:2, nombre: 'Instagram'},
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
             <div className={style.section}> 
              <article className={style.article}>
                <p className={style.section_p}>SOBRE MI</p>
               <h3 className={style.section_h3}>Construido sobre la integridad, impulsado por la justicia.</h3>
              </article>
              <article className={style.article_dos}> 
                <p className={style.section_p_dos}> 
                Bajo la dirección del Dr. Leopoldo Murúa, abogado especialista en derecho penal, contando con un equipo interdisciplinario de profesionales comprometidos con la defensa penal activa, estratégica y personalizada.
                Bajo la dirección del Dr. Leopoldo Murúa, abogado especialista en derecho penal, contando con un equipo interdisciplinario de profesionales comprometidos con la defensa penal activa, estratégica y personalizada.
            </p>
            <Link to="/" className={style.link}>Mas sobre mi  </Link>
              </article>
            </div>
{/*AÑOS, MATRICULA*/} 
        <section>
            <div className="max-w-5xl mx-auto px-8">
             <HoverEffect items={projects} />
             </div>
        </section>
{/*QUE TRABAJA*/}
        <section className={style.section_areas_desing}> 
            <h1> 
                AREAS DE PRACTICA
            </h1>
            <DesingArea />
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

        <footer className={style.footer}> 
          <div className={style.footer_nombre}> 
            <p>Guido Palacin</p>
          </div>
          <article className={style.article_footer}> 
          <div className={style.footer_paginas}> 
            <p>Paginas</p>
            <ul> 
              {paginas.map(usuario => (
                <li key={usuario.id}> 
                 {usuario.nombre}
              </li>
              ))}
              
            </ul>
          </div>
          <div className={style.footer_sociales}> 
            <p>Sociales</p>
            <ul> 
              {redes.map(usuario => (
                <li key={usuario.id}> 
                 {usuario.nombre}
              </li>
              ))}
              
            </ul>
          </div>
          </article>

        </footer>

        
        </>
    )
}


