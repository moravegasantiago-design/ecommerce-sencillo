const CATEGORY_INFO = {
  Audio: {
    title: "Audio y Sonido",
    description: "Auriculares, micrófonos y altavoces de alta calidad",
  },
  Laptops: {
    title: "Laptops y Portátiles",
    description: "Las mejores laptops para trabajo y gaming",
  },
  Smartphones: {
    title: "Smartphones",
    description: "Los últimos modelos de iPhone, Samsung y Google",
  },
  Gaming: {
    title: "Gaming",
    description: "Periféricos, consolas y accesorios para gamers",
  },
  Monitores: {
    title: "Monitores",
    description: "Pantallas 4K, gaming y profesionales",
  },
  Componentes: {
    title: "Componentes PC",
    description: "Todo para armar o mejorar tu computadora",
  },
  "Smart Home": {
    title: "Casa Inteligente",
    description: "Dispositivos para automatizar tu hogar",
  },
  Cámaras: {
    title: "Cámaras y Fotografía",
    description: "Cámaras profesionales y accesorios fotográficos",
  },
  VR: {
    title: "Realidad Virtual",
    description: "Cascos VR y experiencias inmersivas",
  },
  Accesorios: {
    title: "Accesorios Tech",
    description: "Cables, cargadores y accesorios esenciales",
  },
} as const;

export const GetDiccinary = (option?: string) => {
  const item = option
    ? CATEGORY_INFO[option as keyof typeof CATEGORY_INFO]
    : undefined;

  return (
    item ?? {
      title: "Productos Destacados",
      description: "Descubre nuestra selección de productos premium",
    }
  );
};

export default GetDiccinary;
