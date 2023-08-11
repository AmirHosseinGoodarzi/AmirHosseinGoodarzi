import Home from "~/pages/Home";
import ROUTES_OBJECT from "./RoutesObject";
import Skills from "~/pages/Skills";
import Portfolio from "~/pages/Portfolio";
import Certificates from "~/pages/Certificates";
import Contact from "~/pages/Contact";
import { useRoutes } from "react-router-dom";
import Err404 from "~/pages/Err404";

export const routes = [
  { path: ROUTES_OBJECT.home, element: <Home /> },
  { path: ROUTES_OBJECT.skills, element: <Skills /> },
  { path: ROUTES_OBJECT.portfolio, element: <Portfolio /> },
  { path: ROUTES_OBJECT.certificates, element: <Certificates /> },
  { path: ROUTES_OBJECT.contact, element: <Contact /> },
  { path: "*", element: <Err404 /> },
];

const AllRoutes = () => useRoutes(routes);

export default AllRoutes;
