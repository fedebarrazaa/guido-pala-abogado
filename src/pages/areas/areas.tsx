import { Img } from '../../components/section_img/areas_img'
import style from '../../styles/areas.module.css'
import { areasPractica } from '../../data/areas'
import { FiCheckCircle } from "react-icons/fi";



export function DesingAreas(){
    return (
        <>
          <section className="relative -mt-24">
          <Img />
          </section>

          <section className={style.section_areas}> 
            <h3 className={style.section_areas_h3}>MIS AREAS DE PRACTICA</h3>
            <h1 className={style.section_areas_h1}>Soluciones legales para cada necesidad</h1>
            <p className={style.section_areas_p}>Cada caso es unico y repite una estrategia a medida. Estas son las areas
                en las que puedo ayudarte a proteger tus derechos e intereses.
            </p>

          </section>
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
          <section> 

          </section>
        </>
    )
}