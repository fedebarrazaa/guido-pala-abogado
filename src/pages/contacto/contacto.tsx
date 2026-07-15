import { Img } from '../../components/section_img/contacto_img'
import style from '../../styles/contacto.module.css'
import  SignupFormDemo  from '../../components/ui/signup-form-demo'
import { FiMessageCircle } from "react-icons/fi";
import { IoShieldOutline } from "react-icons/io5";
import { FaScaleUnbalancedFlip } from "react-icons/fa6";



export function DesingContacto(){


  const textos = [
  { id: 1, icon: <FiMessageCircle fontSize="24px" color="#C8A977" />, titulo: "Respuesta rápida", texto: "Me comprometo a responder tu consulta lo antes posible." },
  { id: 2, icon: <IoShieldOutline fontSize="24px" color="#C8A977" />, titulo: "Confidencialidad", texto: "Tu información y tu consulta serán tratadas con absoluta discreción." },
  { id: 3, icon: <FaScaleUnbalancedFlip fontSize="24px" color="#C8A977" />, titulo: "Atención personalizada", texto: "Cada caso es único y merece una estrategia a medida." },
];
    
    return (
        <>
         <section className="relative -mt-24">
                <Img />
          </section>
      
      <section className={style.section_textos}>
        <article className={style.section_textos_article}>
          <ul className={style.section_ul}>
            {textos.map((texto) => (
              <li key={texto.id} className={style.section_li}>
                <div className={style.section_li_icon}>{texto.icon}</div>
                <div>
                  <div className={style.section_li_uno}>{texto.titulo}</div>
                  <div className={style.section_li_dos}>{texto.texto}</div>
                </div>
              </li>
            ))}
          </ul>
        </article>
        <div className={style.section_component}> 
          <SignupFormDemo />
        </div>
        </section>

        
        </>
    )
}