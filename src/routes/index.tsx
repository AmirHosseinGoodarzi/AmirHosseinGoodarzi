import { PageRouteType } from "~/utils/types";
import Home from "~/pages/Home";
import ROUTES_OBJECT from "./RoutesObject";
import Skills from "~/pages/Skills";
import Portfolio from "~/pages/Portfolio";
import Certificates from "~/pages/Certificates";
import Contact from "~/pages/Contact";

export const PublicRoutes: PageRouteType[] = [
  { path: ROUTES_OBJECT.home, element: <Home /> },
  { path: ROUTES_OBJECT.skills, element: <Skills /> },
  { path: ROUTES_OBJECT.portfolio, element: <Portfolio /> },
  { path: ROUTES_OBJECT.certificates, element: <Certificates /> },
  { path: ROUTES_OBJECT.contact, element: <Contact /> },
];
