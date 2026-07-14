import { Img } from '../../components/section_img/areas_img'
import { areasPractica } from '../../data/areas'
import { FiCheckCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import style from '../../styles/areas.module.css'


export function DesingAreas(){
   const WHATSAPP_NUMBER = "5491133169842"; 
   const message = encodeURIComponent("Hola, quiero hacer una consulta legal");

    return (
        <>
          <section className="relative -mt-24">
          <Img />
          </section>

          <section className={style.section_areas}> 
            <h3 className={style.section_areas_h3}>MIS AREAS DE PRACTICA</h3>
            <h1 className={style.section_areas_h1}>Soluciones legales para cada necesidad</h1>
            <p className={style.section_areas_p}>Cada caso es único y requiere una estrategia a medida. Estas son las areas en las que puedo ayudarte a proteger tus derechos e intereses.
            </p>
          </section>

           <section className={style.section_item}> 
           {areasPractica.map((area) => (
           <div key={area.id} className={style.card_area}>
            <div className={style.card_icon_wrapper}>
            {area.icon}
            </div>
           <h3 className={style.card_titulo}>{area.titulo}</h3>
            <p className={style.card_descripcion}>{area.descripcion}</p>
             <ul className={style.card_lista}>
             {area.items.map((item, idx) => (
              <li key={idx} className={style.card_item}>
               <FiCheckCircle color="#C8A977" />
               <span>{item}</span>
                </li>
              ))}
                </ul>
                 </div>
                   ))}
          </section>

          <section className={style.section_wpp}>
            <div className={style.wpp_icon_circle}>
             <HiOutlineChatBubbleLeftRight fontSize="24px" color="#C8A977" />
             </div>
           <div>
             <h1 className={style.section_wpp_h1}>¿Tenés una consulta sobre tu caso?</h1>
            <p className={style.section_wpp_p}>Estoy para ayudarte. Hablemos y encontremos la mejor solucion</p>
           </div>
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