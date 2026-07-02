import { motion } from "motion/react";
import {ImagesSlider} from '../ui/images-slider'
import { FaWhatsapp} from "react-icons/fa";

const images = [
    "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ]

export function Img() {
   const WHATSAPP_NUMBER = "5491133169842"; // sin + ni espacios
    const message = encodeURIComponent("Hola, quiero hacer una consulta legal");
    return (
        <>
        <section> 
             <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300 py-4">
          Guido Palacin <br />
        </motion.p> 
        <h1 className="font-bold text-xl md:text-4x1 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300 py-4s">Especialistas en Defensa Penal</h1>
        <button className="w-54 px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
            >
            WhatsApp 
            <FaWhatsapp fontSize='20px'/>
            </a>
            </span>
          <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
        </section>
        </>
    )
}