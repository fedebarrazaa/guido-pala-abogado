//import { Img } from '../../components/section_img/section_img'

import imgPerfil from '../../assets/guido.png'


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
        </>
    )
}