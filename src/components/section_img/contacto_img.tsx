import { motion } from "motion/react";
import { ImagesSlider } from "../ui/images-slider";

import imgPerfil from "../../assets/foto-perfil.png";

const images = [imgPerfil];

export function Img() {


  return (
    <section>
      <ImagesSlider
  className="h-[50rem] w-full"
        images={images}
      >
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            z-50
            w-full
            max-w-7xl
            mx-auto
            px-8
            lg:px-24
            flex
            justify-start
          "
        >
          <div className="max-w-xl">

            <motion.h1
              className="
                text-white
                text-5xl
                md:text-6xl
                lg:text-5xl
                font-semibold
                leading-[1.05]
                tracking-[-0.03em]
              "
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Siempre estoy listo para ayudarte y responder a tus
              preguntas.
            </motion.h1>

            <motion.p
              className="
                mt-6
                text-white/90
                text-xl
                leading-relaxed
                max-w-lg
              "
              style={{ fontFamily: "Jost, sans-serif" }}
            >
            Completa el formulario y me pondre en contacto con vos a la brevedad.    
            </motion.p>
          </div>
        </motion.div>
      </ImagesSlider>
    </section>
  );
}