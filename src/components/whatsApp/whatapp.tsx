import { FaWhatsapp } from "react-icons/fa";
import style from '../whatsApp/whatapp.module.css'

export function FloatingWhatsApp() {
  const WHATSAPP_NUMBER = "5491133169842";

  const message = encodeURIComponent(
    "Hola, quiero hacer una consulta legal."
  );

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className={style.floating_whatsapp}
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp size={34} />
    </a>
  );
}