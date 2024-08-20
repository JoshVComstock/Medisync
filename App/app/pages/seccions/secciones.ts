import { FontAwesome } from "@expo/vector-icons";
import { ROUTES } from "../../../components/enum/routes";

type Card = {
    id: number;
    name: string;
    path: string;
    icon: keyof typeof FontAwesome.glyphMap;
  };


export const cards: Card[] = [
    {
      id: 1,
      name: "Resultados de laboratorio",
      path: ROUTES.RESULTADOS,
      icon: "flask",
    },
    {
        id: 2,
        name: "Seguimiento",
        path: ROUTES.RESULTADOS,
        icon: "eye",
      },
      {
        id: 3,
        name: "Alertas",
        path: ROUTES.RESULTADOS,
        icon: "line-chart",
      },
  ];