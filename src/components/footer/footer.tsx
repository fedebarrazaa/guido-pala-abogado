import style from '../../styles/footer.module.css'
import { Link } from "react-router-dom"

export function FooterDesing(){
        const paginas = [
          {id:1, nombre: 'Inicio', to:'/'},
          {id:2, nombre: 'Sobre mi', to:'/sobre-mi'},
          {id:3, nombre: 'Areas', to:'/areas'},
          {id:4, nombre: 'Contacto', to: '/contacto'},
        ]
    
        const redes = [
          {id:1, nombre: 'hola@guidopalcin.com'},
          {id:2, nombre: '+54 9 11 3316-9842'},
          {id:3, nombre: 'CABA, Prov. Buenos Aires'},
        ]

        const areas = [
          {id:1, nombre: 'Penal'},
          {id:2, nombre: 'Penal Economico'},
          {id:3, nombre: 'Compliance'},
        ]
    return (
        <>
        <footer className={style.footer}> 
          <div className={style.footer_nombre}> 
            <p className={style.titulo}>Guido Palacin</p>
            <p className={style.texto}>ABOGADO</p>
            <p className={style.texto_dos}>Asesoramiento legal estrategico basado en compromiso, claridad y resultados.</p>
          </div>
          <article className={style.article_footer}> 
          <div className={style.footer_paginas}> 
            <p>PAGINAS</p>
            <ul> 
              {paginas.map(usuario => (
                <li key={usuario.id}> 
                 <Link to={usuario.to}>
                  {usuario.nombre}
                </Link>
              </li>
              ))}
              
            </ul>
          </div>

          <div className={style.footer_areas}> 
            <p>AREAS</p>
            <ul> 
              {areas.map(usuario => (
                <li key={usuario.id}> 
                 {usuario.nombre}
              </li>
              ))}
              
            </ul>
          </div>

          <div className={style.footer_sociales}> 
            <p>CONTACTO</p>
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