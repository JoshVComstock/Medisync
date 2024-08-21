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
        name: "Seguimiento",
        path: ROUTES.PAGES,
        icon: "eye",
      },
      {
        id: 2,
        name: "Resultados de laboratorio",
        path: ROUTES.RESULTADOS,
        icon: "flask",
      },
      {
        id: 3,
        name: "Alertas",
        path: ROUTES.SECCIONS,
        icon: "line-chart",
      },
  ];