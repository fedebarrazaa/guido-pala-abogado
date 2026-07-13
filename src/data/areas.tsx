import { GiInjustice } from "react-icons/gi";
import { BsBank2 } from "react-icons/bs";
import { MdOutlinePeople } from "react-icons/md";



export interface AreasTrabajadas {
    id: number;
    icon:React.ReactNode;
    titulo: string;
    descripcion: string; 
    items: string[];
}

export const areasPractica: AreasTrabajadas[] = [
    { 
        id: 1,
        icon: <GiInjustice fontSize="32px" color="#C8A977" />,
        titulo: "Derecho Civil",
        descripcion: "Asesoramiento y representacion en conflictos civiles, contratos, obligaciones, daños y perjuicios, sucesiones, propiedad y relaciones personales",
        items: [ 
            "Contratos y obligaciones",
            "Daños y perjuicios",
            "Sucesiones",
            "Derechos reales y propiedad",
            "Familia y relaciones personales"
        ]
   },
    { 
        id: 2,
        icon: <BsBank2 fontSize="32px" color="#C8A977" />,
        titulo: "Derecho Jurisdiccional",
        descripcion: "Intervencion en procesos judiciales en todas sus instancias. Defensa tecnica, estrategica procesal y acompañamiento constante",
        items: [ 
            "Procesos civiles",
            "Procesos comerciales",
            "Medidas cautelares",
            "Ejecuciones",
            "Recursos y apelaciones",
        ]
   },
    { 
        id: 3,
        icon: <MdOutlinePeople fontSize="32px" color="#C8A977" />,
        titulo: "Representacion",
        descripcion: "Representacion legal de personas fisicas y juridicas ante organismos publicos y privados. Defensa de derechos e intereses con compromiso y dedicacion",
        items: [ 
            "Representacion judicial",
            "Representacion extrajudicial",
            "Gestiones ante organismo",
            "Negociaciones y mediacion",
            "Asesoramiento integral"
        ]
   }








]
