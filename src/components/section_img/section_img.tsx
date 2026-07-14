import { motion } from "motion/react";
import { ImagesSlider } from "../ui/images-slider";
import { FaWhatsapp } from "react-icons/fa";
import imgPerfil from "../../assets/foto-perfil.png";

const images = [imgPerfil];

export function Img() {
  const WHATSAPP_NUMBER = "5491133169842";
  const message = encodeURIComponent(
    "Hola, quiero hacer una consulta legal"
  );

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
                md:text-7xl
                font-bold
                leading-none
              "
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Guido Adrian Palacin
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
              Defensa penal estratégica para particulares y empresas.
            </motion.p>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                mt-10
                rounded-full
                bg-[#D2B48C]
                px-8
                py-4
                text-white
                font-semibold
                transition
                hover:bg-[#C19A6B]
              "
              style={{ fontFamily: "Jost, sans-serif" }}
            >
              Solicitar consulta
              <FaWhatsapp size={20} />
            </a>

          </div>
        </motion.div>
      </ImagesSlider>
    </section>
  );
}