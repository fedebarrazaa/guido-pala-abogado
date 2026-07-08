import imgPerfil from '../../assets/guido.png'
import style from '../../styles/contacto.module.css'
import  SignupFormDemo  from '../../components/ui/signup-form-demo'


export function DesingContacto(){
    
    return (
        <>
        <section className="relative -mt-24">
        <img 
          src={imgPerfil} 
          className="w-full h-[700px] object-cover object-top" 
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Contacto</h1>
        </div>
      </section>
      
      <section className={style.section_textos}>
        <article className={style.section_textos_article}> 
          <p className={style.section_p}>CONTACTO</p>
        <h1 className={style.section_h1}>Siempre estoy listos para ayudarte y responder a tus preguntas.</h1>  
        </article>
        <SignupFormDemo />
        
        </section>

        
        </>
    )
}