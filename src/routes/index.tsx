import { PageRouteType } from "~/utils/types";
import Home from "~/pages/Home";
import ROUTES_OBJECT from "./RoutesObject";


export const PublicRoutes: PageRouteType[] = [
  { path: ROUTES_OBJECT.home, element: <Home /> },
];