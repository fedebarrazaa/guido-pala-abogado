import imgPerfil from '../../assets/foto-perfil.png'
import style from '../../styles/sobremi.module.css'
import { HoverEffect } from '../../components/ui/card-hover-effect'


export function DesingSobreMi(){
    const textos = [
        {id:1, texto: 'Soy Guido Palacín, abogado comprometido con brindar un asesoramiento jurídico claro, estratégico y personalizado para cada cliente. Entiendo que detrás de cada consulta existe una persona, una familia o una empresa que necesita respuestas, por eso trabajo con cercanía, transparencia y dedicación en cada etapa del proceso.'},
        {id:2, texto: 'Entiendo que detrás de cada consulta existe una persona, una familia o una empresa que necesita respuestas, por eso trabajo con cercanía, transparencia y dedicación en cada etapa del proceso.'},
        {id:3, texto: 'Mi objetivo es ofrecer soluciones legales eficientes, priorizando siempre la comunicación, la confianza y la defensa de los intereses de quienes depositan su confianza en mi trabajo. Mi objetivo es ofrecer soluciones legales eficientes, priorizando siempre la comunicación, la confianza y la defensa de los intereses de quienes depositan su confianza en mi trabajo. Lorem'},
    ]

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
        { 
            title: "95%",
            description: "Clientes satisfecho.",
        },
        { 
            title: "Atencion",
            description: "Personalizada.",
        },
    ]

    return (
        <>
       <section className="relative -mt-24">
        <img 
          src={imgPerfil} 
          className="w-full h-[700px] object-cover object-top" 
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Sobre mi</h1>
        </div>
      </section>

      <section className={style.section_textos}>
        <article> 
          <p className={style.section_p}>SOBRE MI</p>
        <h1 className={style.section_h1}>Un compromiso con la defensa de tus derechos</h1>  
        </article>
        
        <div className={style.section_textos_box}>  
            {textos.map((texto) => (
            <p key={texto.id}> 
                {texto.texto}
            </p>
        ))}
        </div>
        
        <HoverEffect items={projects} />

      </section>
        </>
    )
}