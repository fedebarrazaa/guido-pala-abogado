import style from '../../styles/sobremi.module.css'
import { HoverEffect } from '../../components/ui/card-hover-effect'
import { Img } from '../../components/section_img/sobremi_img'

export function DesingSobreMi(){
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
        <Img />
      </section>

      <section className={style.section_textos}>
        <HoverEffect items={projects} />
      </section>

      <section className={style.section_cita}> 
        <div>
            <h3 className={style.section_cita_h3}> "La confianza se construye con resultados y una comunicación transparente."</h3>
        <p className={style.section_cita_p}>- Guido Palacin</p>
        </div>
        
      </section>
        </>
    )
}