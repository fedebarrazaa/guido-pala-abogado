import { Img } from '../../components/section_img/section_img'
import { HoverEffect } from '../../components/ui/card-hover-effect'
import { InfiniteMovingCards } from '../../components/ui/infinite-moving-cards'
import  TestCarousel  from '../../components/motion-primitives/component.carousel'

import style from '../../styles/home.module.css'
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { TbCash } from "react-icons/tb";
import { FiMessageCircle } from "react-icons/fi";
import { Link } from "react-router-dom"
import { IoShieldOutline } from "react-icons/io5";
import { GrLinkNext } from "react-icons/gr";



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
        },

    ]

    const data = [
        {id:1, icon: <MdOutlinePeopleAlt fontSize='60px' color="#D2B48C"/>, text:'Atención personalizada'},
        {id:2, icon: <FiMessageCircle fontSize='60px' color="#D2B48C"/>, text:'Seguimiento del caso'},
        {id:3, icon: <TbCash fontSize='60px' color="#D2B48C"/>, text:'Honorarios claros'},
        {id:4, icon: <IoShieldOutline fontSize='60px' color="#D2B48C"/>, text: 'Compromiso y dedicacion'}
    ]

    const testimonials = [ 
        {
            quote:"Guido me acompañó durante todo el proceso con mucha claridad y profesionalismo. Siempre respondió mis dudas y logró resolver mi caso de la mejor manera. Lo recomiendo totalmente.",
            name: "María Fernández",
        },
        {
            quote:"Destaco su compromiso y rapidez para encontrar soluciones. Me brindó un asesoramiento preciso y estuvo presente en cada etapa del proceso. Excelente profesional.",
            name: "Javier Gómez",
        },
        {
            quote: "Necesitaba asesoramiento legal para mi emprendimiento y Guido superó mis expectativas. Explica cada detalle de forma sencilla y transmite mucha confianza.",
            name: "Carolina Rivas",
        },
        {
            quote:"Desde la primera consulta me sentí escuchado. Su trato humano y su conocimiento jurídico hicieron que afrontara una situación compleja con mucha tranquilidad.",
            name: "Sergio Álvarez",
        },
        {
            quote:"Agradezco la dedicación y la transparencia con la que manejó mi caso. Siempre estuvo disponible para responder consultas y el resultado fue excelente.",
            name: "Lucía Martínez",
        },
        {
            quote:"Profesional, responsable y muy atento. Me explicó todas las alternativas antes de tomar una decisión y eso me dio mucha seguridad durante el proceso.",
            name: "Federico López",
        }
    ]
    return (
        <> 
{/*HEADER + IMAGEN + BOTON WPP*/}
        <section className="relative -mt-24"> 
         <Img />
             </section>
{/*TEXTO MINI PRESENTACION*/}
             <div className={style.section}> 
              <article className={style.article}>
                <p className={style.section_p}>SOBRE MI</p>
               <h3 className={style.section_h3}>Construido sobre la integridad, impulsado por la justicia.</h3>
              </article>
              <article className={style.article_dos}> 
                <p className={style.section_p_dos}> 
                Brindo asesoramiento jurídico en derecho penal con un enfoque estratégico, personalizado y orientado a resultados. Entiendo que cada situación presenta desafíos únicos, por eso desarrollo una estrategia adaptada a las necesidades de cada cliente. Mi compromiso es brindar un acompañamiento cercano, transparente y profesional, ofreciendo respuestas claras y una defensa sólida en cada etapa del proceso.
            </p>
            <Link to="/sobre-mi" className={style.link}>Mas sobre mi <GrLinkNext /> </Link>
              </article>
            </div>
{/*AÑOS, MATRICULA*/} 
        <section className={style.section_hover_card}>
            <div className="max-w-5xl mx-auto px-8">
             <HoverEffect items={projects} />
            </div>
        </section>
{/*QUE TRABAJA*/}
        <section className={style.section_areas_desing}> 
          <article className={style.article_section_areas}> 
            <p className={style.section_p_article}>AREAS DE PRACTICA</p>
            <h3 className={style.section_h3_article}>Experiencia de confianza.</h3>
          </article>
          <article className={style.article_section_areas_dos}> 
            <TestCarousel />
          </article>
        </section>
{/*PORQUE ELEGIRME*/}
<section className={style.section_elegir}>
    <article className={style.article_elegir_izq}>
        <p className={style.section_elegir_p}>¿POR QUÉ ELEGIRME?</p>
    </article>
    <article className={style.article_elegir_der}>
        <ul className={style.ul}>
            {data.map((usuario, index) => (
                <li key={index}>
                    {usuario.icon}
                    <span>{usuario.text}</span>
                </li>
            ))}
        </ul>
    </article>
</section>

         {/* TESTIMONIOS*/}
         <section className={style.desing_testimonios}> 
    <article className={style.testimonios_izq}>
        <p className={style.desing_testimonios_p}>TESTIMONIOS</p>
    </article>

    <article className={style.testimonios_der}>
<div className="w-full max-w-6xl mx-auto h-[12rem] rounded-md flex flex-col antialiased items-center justify-start relative overflow-hidden">
            <InfiniteMovingCards items={testimonials} direction="right" speed="slow"/> 
        </div>
    </article>

</section>

        {/*NECESITAS*/}
        <section className={style.section_contact}> 
          <article className={style.article_contact}>
            <h1>¿Necesitas asesoramiento personal?</h1>
            <p>Estoy para ayudarte. Consulta tu caso sin compromiso</p>
          </article>
          <button className="inline-flex items-center gap-2 mt-10 rounded-full bg-[#D2B48C] px-8 py-4 text-white font-semibold transition hover:bg-[#C19A6B]">
          <span className={style.fede}>
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


