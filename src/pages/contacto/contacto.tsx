import { Img } from '../../components/section_img/contacto_img'
import style from '../../styles/contacto.module.css'
import  SignupFormDemo  from '../../components/ui/signup-form-demo'


export function DesingContacto(){
  const textos = [
    {id: 1, titulo: "Respuesta rapido", texto: "Me comprometo a responder tu consulta lo antes posible."},
    {id: 2, titulo: "Confidencialidad", texto: "Tu informacion y tu consulta seran tratadas con absoluta discrecion."},
    {id: 3, titulo: "Atencion", texto: "Cada caso es unico y merece una estrategia a medida."}
  ]
    
    return (
        <>
         <section className="relative -mt-24">
                <Img />
          </section>
      
      <section className={style.section_textos}>
        <article className={style.section_textos_article}> 
        <ul className={style.section_ul}>
          {textos.map((texto)=>(
            <li key={texto.id} className={style.section_li}>
              <div>
                 {texto.titulo}
              </div>
             
              <div className={style.section_li_dos}>
                {texto.texto}
              </div>
              
            </li>
          ))}
          
        </ul>
        </article>
        <SignupFormDemo />
        </section>

        
        </>
    )
}