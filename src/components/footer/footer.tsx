import style from '../../styles/footer.module.css'

export function FooterDesing(){
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